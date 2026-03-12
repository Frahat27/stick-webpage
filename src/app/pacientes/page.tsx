import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Pacientes | Alineadores invisibles STICK',
  description:
    'Todo lo que necesitás saber sobre el tratamiento de alineadores invisibles STICK. Cómo funciona, precios, antes y después, y preguntas frecuentes.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes' },
};

const sections = [
  {
    href: '/pacientes/como-funciona',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Cómo funciona',
    description:
      'El proceso completo paso a paso: desde el escaneo inicial hasta que te vas con tu sonrisa alineada. Tiempos, etapas y qué esperar en cada consulta.',
    cta: 'Ver el proceso',
  },
  {
    href: '/pacientes/antes-y-despues',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Antes y después',
    description:
      'Más de 300 casos reales documentados con fotos. Distintos tipos de maloclusión, distintas duraciones. Resultados concretos, no renders.',
    cta: 'Ver resultados',
  },
  {
    href: '/pacientes/precios',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Precios y planes',
    description:
      'Sin letra chica. Te explicamos qué incluye el tratamiento, cómo se forma el precio y qué opciones de financiación existen.',
    cta: 'Ver precios',
  },
  {
    href: '/pacientes/alineadores-vs-brackets',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Alineadores vs brackets',
    description:
      'Una comparativa honesta entre las dos opciones. Sin vender humo: cuándo convienen los alineadores y cuándo puede ser mejor otra opción.',
    cta: 'Ver comparativa',
  },
  {
    href: '/pacientes/preguntas-frecuentes',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Preguntas frecuentes',
    description:
      'Todo lo que los pacientes preguntan antes de empezar: uso, duración, dolor, resultados, rediseños, contenciones y más.',
    cta: 'Ver preguntas',
  },
];

export default function PacientesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://stickalineadores.com.ar' },
            { '@type': 'ListItem', position: 2, name: 'Pacientes', item: 'https://stickalineadores.com.ar/pacientes' },
          ],
        }) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Para pacientes</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Todo lo que necesitás saber
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Información clara y honesta sobre el tratamiento de alineadores STICK. Sin promesas exageradas ni presión.
            </p>
          </div>
        </Container>
      </section>

      {/* Sections grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-white border border-neutral-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  {s.icon}
                </div>
                <h2 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {s.title}
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-5">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  {s.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-neutral-50">
        <Container>
          <CTASection
            title="¿Tenés dudas? Escribinos"
            description="No necesitás tener todo claro antes de contactarnos. Respondemos todas tus preguntas por WhatsApp antes de coordinar cualquier turno."
            context="patient"
            ctaLabel="Escribir por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
