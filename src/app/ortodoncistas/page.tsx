import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Ortodoncistas | Trabajá con STICK Alineadores',
  description:
    'STICK trabaja con ortodoncistas para brindar alineadores invisibles con seguimiento clínico. Conocé el flujo de trabajo, beneficios y cómo sumarte.',
  alternates: { canonical: 'https://stickalineadores.com.ar/ortodoncistas' },
};

const highlights = [
  {
    label: '~7 días',
    desc: 'desde el escaneo hasta la entrega de alineadores',
  },
  {
    label: 'Control clínico tuyo',
    desc: 'aprobás el diseño antes de que fabriquemos',
  },
  {
    label: 'Modelo flexible',
    desc: 'definís tu nivel de involucramiento caso a caso',
  },
  {
    label: 'Fabricación local',
    desc: 'producción argentina, comunicación directa',
  },
];

const sections = [
  {
    href: '/ortodoncistas/como-trabajamos',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Cómo trabajamos',
    description: 'El flujo de colaboración entre STICK y el profesional. Desde la derivación del caso hasta el resultado final, paso a paso.',
    cta: 'Ver el proceso',
  },
  {
    href: '/ortodoncistas/beneficios',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Por qué trabajar con STICK',
    description: 'Propuesta de valor para el profesional: tecnología, tiempos cortos, soporte técnico y modelo de colaboración flexible.',
    cta: 'Ver beneficios',
  },
  {
    href: '/ortodoncistas/faq',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Preguntas frecuentes',
    description: 'Las dudas más comunes que tienen los profesionales antes de sumarse. Proceso, precios para el profesional, soporte y más.',
    cta: 'Ver FAQ',
  },
  {
    href: '/ortodoncistas/contacto',
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Contacto',
    description: 'Coordinamos una reunión para presentarte el modelo de trabajo en detalle y responder todas tus preguntas.',
    cta: 'Contactar',
  },
];

export default function OrtodoncistasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-950 text-white pt-12 pb-12 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-2">Para profesionales</p>
              <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
                Trabajá con STICK
              </h1>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                STICK es el sistema de alineadores que pone el control clínico en el centro. Trabajamos con ortodoncistas que quieren ofrecer a sus pacientes resultados reales con seguimiento real.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/ortodoncistas/contacto"
                  className="inline-flex items-center justify-center bg-lime-300 text-brand-900 font-bold px-6 py-3.5 rounded-full hover:bg-lime-200 transition-colors"
                >
                  Quiero trabajar con STICK
                </Link>
                <Link
                  href="/ortodoncistas/como-trabajamos"
                  className="inline-flex items-center justify-center border border-neutral-600 text-white font-semibold px-6 py-3.5 rounded-full hover:border-neutral-400 transition-colors"
                >
                  Ver cómo funciona
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto">
                <Image
                  src="/Guardapolvo.png"
                  alt="Profesional STICK Alineadores"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights strip */}
      <section className="bg-brand-900 border-t border-brand-800">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-800">
            {highlights.map((h) => (
              <div key={h.label} className="px-6 py-5">
                <p className="text-lime-300 font-bold text-base mb-0.5">{h.label}</p>
                <p className="text-brand-300 text-sm leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sections */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Todo lo que necesitás saber</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">¿Por dónde empezar?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col bg-white border border-neutral-200 rounded-2xl p-7 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    {s.icon}
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-brand-700 transition-colors">
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
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Querés sumarte?"
            description="Escribinos por WhatsApp o completá el formulario de contacto. Coordinamos una reunión para contarte todo."
            context="orthodontist"
            ctaLabel="Escribir por WhatsApp"
            secondary={{ label: 'Ir al formulario', href: '/ortodoncistas/contacto' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
