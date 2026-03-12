# Conectar Agente Sofia a una Página Web

## Requisitos previos del proyecto destino

- **Next.js App Router** — la API route y el componente están diseñados para este stack
- **Tailwind CSS** — los estilos usan clases de Tailwind
- **Colores custom**: el widget usa clases como `bg-brand-600`, `bg-brand-700` que son custom de STICK. En otro proyecto hay que reemplazarlas por los colores propios (ej: `bg-blue-600`) o definir los colores en el `tailwind.config.ts`
- **El bot responde según su system prompt**: Sofia está configurada para hablar de STICK (alineadores, turnos, precios). Si el otro proyecto es de otra cosa, hay que ajustar el system prompt en el backend del bot o crear un bot separado

---

## Arquitectura

```
[Browser] → [Next.js API Route (proxy)] → [Backend Bot (FastAPI)]
```

El visitante chatea desde un widget flotante en la web. Los mensajes pasan por una API route server-side que autentica con el backend del bot y retransmite los mensajes. Las credenciales nunca se exponen al cliente.

---

## Requisitos

- **Backend del bot** desplegado y accesible (ej: `https://whatsapp-bot-stick-production.up.railway.app`)
- **Frontend Next.js** (App Router) con Tailwind CSS
- Endpoint `POST /api/v1/admin/simulate` disponible en el bot
- Endpoint `POST /api/v1/auth/login` para autenticación JWT

---

## 1. Variables de entorno

Agregar en `.env.local` (desarrollo) y en el hosting (Railway/Vercel) en producción:

```env
SOFIA_API_URL=https://whatsapp-bot-stick-production.up.railway.app
SOFIA_ADMIN_USER=Franco
SOFIA_ADMIN_PASSWORD=admin123
```

**IMPORTANTE:** `.env.local` está en `.gitignore` — nunca commitear credenciales.

---

## 2. API Route — Proxy server-side

Crear `src/app/api/chat/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export const maxDuration = 90;

const API_URL = process.env.SOFIA_API_URL || '';
const ADMIN_USER = process.env.SOFIA_ADMIN_USER || '';
const ADMIN_PASS = process.env.SOFIA_ADMIN_PASSWORD || '';

let cachedToken: string | null = null;
let tokenExpiry = 0;

async function getToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken;

  const params = new URLSearchParams();
  params.append('username', ADMIN_USER);
  params.append('password', ADMIN_PASS);

  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!res.ok) throw new Error('Auth failed');

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + 23 * 60 * 60 * 1000; // Renovar 1h antes de las 24h
  return cachedToken!;
}

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== 'string' || message.length > 1000) {
      return NextResponse.json({ error: 'Mensaje inválido' }, { status: 400 });
    }

    if (!ADMIN_USER || !ADMIN_PASS) {
      return NextResponse.json({ error: 'Chat no configurado' }, { status: 503 });
    }

    const token = await getToken();

    // Generar phone numérico único por sesión (evita conflictos de Redis lock)
    const s = String(sessionId || 'anonymous');
    let h1 = 0;
    let h2 = 7;
    for (let i = 0; i < s.length; i++) {
      h1 = ((h1 * 31 + s.charCodeAt(i)) >>> 0);
      h2 = ((h2 * 37 + s.charCodeAt(i)) >>> 0);
    }
    const phone = `54911${String(h1 % 10000000).padStart(7, '0')}${String(h2 % 100).padStart(2, '0')}`;

    const body = JSON.stringify({
      phone,
      content: message,
      contact_name: 'Visitante Web',
    });

    const callSimulate = async (authToken: string): Promise<Response> => {
      return fetch(`${API_URL}/api/v1/admin/simulate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body,
        signal: AbortSignal.timeout(90_000),
      });
    };

    // Reintentar hasta 3 veces (maneja Redis lock y errores transitorios)
    let lastError = '';
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) {
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }

      let currentToken = token;
      let res = await callSimulate(currentToken);

      // Si el token expiró, renovar y reintentar
      if (res.status === 401) {
        cachedToken = null;
        tokenExpiry = 0;
        currentToken = await getToken();
        res = await callSimulate(currentToken);
      }

      if (res.ok) {
        const data = await res.json();
        // El campo de respuesta del bot es "response_text"
        const reply = data.response_text || data.reply || data.response || JSON.stringify(data);
        return NextResponse.json({ reply });
      }

      lastError = await res.text();
    }

    throw new Error(`Simulate failed: ${lastError}`);
  } catch (err) {
    console.error('[ChatWidget] Error:', err);
    return NextResponse.json(
      { error: 'No pude conectar con Sofia. Intentá de nuevo en unos segundos.' },
      { status: 500 }
    );
  }
}
```

### Puntos clave de la API Route

- **JWT cacheado**: se autentica una vez y reutiliza el token 23 horas
- **Phone numérico por sesión**: el bot usa Redis lock por teléfono — un phone con formato `web-xxx` puede causar errores 500. Usar formato numérico `54911XXXXXXXXX` generado con hash del sessionId
- **Retry con backoff**: el endpoint `/simulate` puede fallar si hay un lock activo para ese phone. Se reintenta hasta 3 veces con espera incremental
- **`maxDuration = 90`**: el pipeline de Claude puede tardar hasta 90 segundos

---

## 3. Componente ChatWidget

Crear `src/components/layout/ChatWidget.tsx`:

```tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function generateSessionId() {
  if (typeof window === 'undefined') return 'ssr';
  let id = sessionStorage.getItem('sofia-session');
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('sofia-session', id);
  }
  return id;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef('');
  const sendingRef = useRef(false);

  useEffect(() => {
    sessionId.current = generateSessionId();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || sendingRef.current) return;
    sendingRef.current = true;

    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: data.reply || data.error || 'No pude obtener respuesta.' },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Error de conexión. Intentá de nuevo.' },
      ]);
    } finally {
      setLoading(false);
      sendingRef.current = false;
    }
  }, [input, loading]);

  return (
    <>
      {open && (
        <div className="fixed bottom-[10.5rem] right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brand-600 px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Sofia</p>
              <p className="text-white/70 text-xs">Asistente virtual STICK</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white p-1" aria-label="Cerrar chat">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-neutral-50">
            {messages.length === 0 && (
              <div className="text-center text-neutral-400 text-sm mt-8 space-y-2">
                <p className="text-2xl">👋</p>
                <p className="font-medium text-neutral-600">¡Hola! Soy Sofia</p>
                <p>Preguntame lo que necesites.</p>
              </div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' ? 'bg-brand-600 text-white rounded-br-md' : 'bg-white text-neutral-800 border border-neutral-200 rounded-bl-md shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-brand-600/40 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-brand-600/40 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-brand-600/40 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-neutral-200 px-3 py-3 bg-white shrink-0">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu consulta..."
                disabled={loading}
                className="flex-1 bg-neutral-100 rounded-full px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-600/30 disabled:opacity-50"
                maxLength={1000}
              />
              <button type="submit" disabled={loading || !input.trim()} className="w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 disabled:opacity-40 text-white flex items-center justify-center shrink-0" aria-label="Enviar">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button — posicionado arriba del botón de WhatsApp */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center ${
          open ? 'bg-neutral-700 hover:bg-neutral-600' : 'bg-brand-600 hover:bg-brand-700'
        }`}
        aria-label={open ? 'Cerrar chat' : 'Chatear con Sofia'}
      >
        {open ? (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </button>
    </>
  );
}
```

---

## 4. Agregar al Layout

En `src/app/layout.tsx`:

```tsx
import ChatWidget from '@/components/layout/ChatWidget';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

// Dentro del <body>:
<WhatsAppFloatingButton />
<ChatWidget />
```

El botón de Sofia queda arriba (`bottom-24`) y WhatsApp abajo (`bottom-6`).

---

## 5. Config de Next.js

En `next.config.mjs` agregar:

```js
const nextConfig = {
  reactStrictMode: false, // Evita double-render en dev que duplica requests al bot
  // ... resto de config
};
```

---

## 6. Deploy

Configurar en Railway (o el hosting que uses) las 3 variables de entorno:

```
SOFIA_API_URL=https://tu-backend-bot.up.railway.app
SOFIA_ADMIN_USER=tu_usuario
SOFIA_ADMIN_PASSWORD=tu_password
```

---

## Troubleshooting

| Problema | Causa | Solución |
|----------|-------|----------|
| "Chat no configurado" | Faltan env vars | Verificar `SOFIA_ADMIN_USER` y `SOFIA_ADMIN_PASSWORD` |
| "No pude conectar con Sofia" | Backend devuelve 500 | Probablemente Redis lock — esperar 2 min y reintentar. El retry automático maneja la mayoría de casos |
| Conversaciones cruzadas entre sesiones | Colisión de hash en phone | Muy improbable (~1 en 1 billón). Si ocurre, el usuario puede cerrar y reabrir la pestaña para generar nueva sesión |
| Respuesta lenta (5-15 seg) | Normal — Claude procesa con herramientas | El bot ejecuta Claude + tools (buscar paciente, leads, etc.) |
| Error 401 en logs | Token JWT expirado | Se renueva automáticamente, no requiere acción |

---

## Endpoints del bot utilizados

| Método | Endpoint | Uso |
|--------|----------|-----|
| `POST` | `/api/v1/auth/login` | Autenticación (form-urlencoded) → devuelve JWT |
| `POST` | `/api/v1/admin/simulate` | Enviar mensaje al bot sin pasar por WhatsApp |

### Request a `/api/v1/admin/simulate`

```json
{
  "phone": "5491112345678",
  "content": "hola",
  "contact_name": "Visitante Web"
}
```

### Response

```json
{
  "response_text": "Hola 😊 Soy Sofía, coordinadora de Stick. ¿En qué te puedo ayudar?",
  "conversation_id": 123,
  "tool_calls": []
}
```
