import { NextRequest, NextResponse } from 'next/server';

// Allow up to 90s for Sofia to respond (Claude + tools pipeline)
export const maxDuration = 90;

const API_URL = process.env.SOFIA_API_URL || 'https://whatsapp-bot-stick-production.up.railway.app';
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

  if (!res.ok) {
    throw new Error('Auth failed');
  }

  const data = await res.json();
  cachedToken = data.access_token;
  // Refresh 1h before expiry (token lasts 24h)
  tokenExpiry = Date.now() + 23 * 60 * 60 * 1000;
  return cachedToken!;
}

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== 'string' || message.length > 1000) {
      return NextResponse.json({ error: 'Mensaje inválido' }, { status: 400 });
    }

    if (!ADMIN_USER || !ADMIN_PASS) {
      console.error('[ChatWidget] SOFIA_ADMIN_USER / SOFIA_ADMIN_PASSWORD not configured');
      return NextResponse.json({ error: 'Chat no configurado' }, { status: 503 });
    }

    const token = await getToken();

    // Generate a unique numeric phone per session to avoid Redis lock conflicts
    // Use two different hashes to minimize collisions
    const s = sessionId || 'anonymous';
    const h1 = Array.from(s).reduce((a: number, c: string) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
    const h2 = Array.from(s).reduce((a: number, c: string) => (a * 37 + c.charCodeAt(0)) >>> 0, 7);
    const phone = `54911${String(h1 % 10000000).padStart(7, '0')}${String(h2 % 100).padStart(2, '0')}`;

    const body = JSON.stringify({
      phone,
      content: message,
      contact_name: 'Visitante Web',
    });

    async function callSimulate(authToken: string): Promise<Response> {
      return fetch(`${API_URL}/api/v1/admin/simulate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body,
        signal: AbortSignal.timeout(90_000),
      });
    }

    // Retry up to 3 times (handles Redis lock conflicts and transient errors)
    let lastError = '';
    for (let attempt = 0; attempt < 3; attempt++) {
      if (attempt > 0) {
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }

      let currentToken = token;
      let res = await callSimulate(currentToken);

      if (res.status === 401) {
        cachedToken = null;
        tokenExpiry = 0;
        currentToken = await getToken();
        res = await callSimulate(currentToken);
      }

      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({ reply: extractReply(data) });
      }

      lastError = await res.text();
      console.error(`[ChatWidget] Attempt ${attempt + 1} failed:`, res.status, lastError);
    }

    throw new Error(`Simulate failed after retries: ${lastError}`);
  } catch (err) {
    console.error('[ChatWidget] Error:', err);
    return NextResponse.json(
      { error: 'No pude conectar con Sofia. Intentá de nuevo en unos segundos.' },
      { status: 500 }
    );
  }
}

function extractReply(data: Record<string, unknown>): string {
  if (typeof data === 'string') return data;
  if (data.response_text) return data.response_text as string;
  if (data.reply) return data.reply as string;
  if (data.response) return data.response as string;
  if (data.message) return data.message as string;
  if (data.content) return data.content as string;
  return JSON.stringify(data);
}
