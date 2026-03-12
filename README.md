# STICK Alineadores – Sitio Web Oficial

Plataforma web oficial de STICK – Sistema de alineadores invisibles con seguimiento y rediseño clínico.

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
**Deploy:** Vercel

---

## Correr localmente

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

---

## ✅ Checklist de pendientes antes del launch

### Críticos

| # | Pendiente | Archivo |
|---|---|---|
| ~~1~~ | ~~**Número de WhatsApp**~~ | ✅ `5491136897699` configurado |
| ~~3~~ | ~~**Google Maps embed**~~ | ✅ iframe + link configurados |
| 4 | **Dominio final** del sitio | `src/app/layout.tsx` → `metadataBase` + canonical en `src/app/[zona]/page.tsx` y `src/app/blog/[slug]/page.tsx` |

### Contenido

| # | Pendiente | Archivo / Carpeta |
|---|---|---|
| 5 | **Imágenes antes/después** (100+ casos) | `/public/images/before-after/` + actualizar `src/data/beforeAfter.ts` |
| 6 | **Rangos de precios y planes** | `src/app/pacientes/precios/page.tsx` → bloque marcado `[PENDIENTE]` |
| 7 | **Logo STICK** (PNG transparente) | `/public/logo.png` |
| 8 | **OG image** (1200×630px) | `/public/og-image.jpg` |
| 9 | **Testimonios/reseñas reales** | `src/app/page.tsx` → sección testimonios |
| 10 | **Horarios de atención** reales | `src/components/layout/SchemaOrg.tsx` → `openingHoursSpecification` |
| 11 | **Redes sociales** (Instagram, etc.) | `src/components/layout/SchemaOrg.tsx` → `sameAs` + `src/components/layout/Footer.tsx` |
| 12 | **Coordenadas GPS** exactas | `src/components/layout/SchemaOrg.tsx` → `geo.latitude` y `geo.longitude` |

---

## Cómo agregar nuevas zonas

1. Abrí `src/data/locations.ts`
2. Agregá un nuevo objeto al array `locations` con la misma estructura que los existentes
3. La ruta `/alineadores-invisibles-[slug]` se genera automáticamente en el próximo build

---

## Cómo agregar posts al blog

Creá un archivo `.mdx` en `src/content/blog/`:

```mdx
---
title: "Título del post"
description: "Descripción para SEO (150–160 caracteres)"
date: "2025-01-15"
author: "Equipo STICK"
tags: ["tag1", "tag2"]
---

Contenido en Markdown...
```

El post aparece automáticamente en `/blog` y en el `sitemap.xml`.

---

## Cómo agregar casos de antes/después

1. Subí las imágenes a `/public/images/before-after/`
2. Abrí `src/data/beforeAfter.ts` y agregá al array:

```ts
{
  id: 'case-07',
  title: 'Descripción del caso',
  tags: ['apiñamiento', 'adulto', '5 meses'],
  imageBefore: '/images/before-after/case-07-before.jpg',
  imageAfter: '/images/before-after/case-07-after.jpg',
  durationMonths: 5,
  category: 'apiñamiento',
}
```

---

## Integrar el formulario de ortodoncistas

El endpoint está en `src/app/api/ortho-contact/route.ts`. Por defecto loguea en consola.

**Opciones de integración:**

### Resend (recomendado para email)
```bash
npm install resend
```
```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ from: 'noreply@stickalineadores.com.ar', to: 'info@stick...', subject: 'Nuevo contacto profesional', text: JSON.stringify(body) });
```

### Google Sheets
Usá `googleapis` + una Service Account con acceso a la planilla. Documentación: [Sheets API Node.js](https://developers.google.com/sheets/api/quickstart/nodejs)

### Notion
```bash
npm install @notionhq/client
```
Usá `notion.pages.create()` para guardar cada envío.

---

## Deploy en Vercel

1. Conectá el repo a [vercel.com](https://vercel.com)
2. Vercel detecta Next.js automáticamente — sin config extra
3. Configurá las variables de entorno si usás integración (ej: `RESEND_API_KEY`)
4. Push a `main` = deploy automático

---

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── layout.tsx                  # Layout global (Header/Footer/WhatsApp)
│   ├── pacientes/                  # Hub + subpáginas
│   │   ├── como-funciona/
│   │   ├── antes-y-despues/
│   │   ├── precios/
│   │   ├── alineadores-vs-brackets/
│   │   └── preguntas-frecuentes/
│   ├── ortodoncistas/              # Hub + subpáginas + formulario
│   │   ├── como-trabajamos/
│   │   ├── beneficios/
│   │   ├── faq/
│   │   └── contacto/
│   ├── [zona]/                     # Páginas SEO local (data-driven)
│   ├── blog/                       # Index + [slug] con MDX
│   ├── api/ortho-contact/          # API route formulario
│   ├── privacidad/
│   ├── terminos/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/                     # Header, Footer, WhatsAppFloatingButton, SchemaOrg
│   └── ui/                         # Container, Section, Badge, Accordion, CTASection
├── content/blog/                   # Posts .mdx (6 posts iniciales incluidos)
├── data/                           # locations.ts, process.ts, faqsPatients.ts, faqsOrtho.ts, beforeAfter.ts
└── lib/                            # blog.ts, whatsapp.ts, utils.ts
```
