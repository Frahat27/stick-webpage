import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Por qué trabajar con STICK | Beneficios para ortodoncistas',
  description:
    'Propuesta de valor de STICK para ortodoncistas: tecnología, tiempos, soporte y modelo de colaboración flexible que potencia tu práctica.',
  alternates: { canonical: 'https://stickalineadores.com.ar/ortodoncistas/beneficios' },
};

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Tiempos rápidos',
    description: 'Desde el escaneo hasta los alineadores listos: ~7 días. Para rediseños y etapas adicionales, el mismo tiempo.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Modelo flexible',
    description: 'El nivel de involucramiento lo definimos juntos. Podés derivar y hacer seguimiento vos, o delegar todo el proceso operativo a STICK.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Control clínico del profesional',
    description: 'El diseño del tratamiento lo revisa y aprueba el ortodoncista antes de fabricar. No perdés el control sobre el caso.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Documentación de cada caso',
    description: 'Registramos cada control, evolución y rediseño. El profesional tiene acceso a la historia de cada caso.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Soporte técnico',
    description: 'Canal directo con nuestro equipo para consultas técnicas, diseño de casos complejos y situaciones clínicas especiales.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Materiales de apoyo',
    description: 'Materiales para presentar la opción de alineadores a tus pacientes: información clara y sin sobreprometer.',
  },
];

export default function BeneficiosPage() {
  return (
    <>
      <section className="bg-brand-950 text-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-2">Por qué STICK</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">Beneficios para el profesional</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              STICK no es solo fabricar alineadores. Es un modelo de trabajo pensado para que el profesional pueda ofrecer resultados de calidad con el soporte que el caso requiere.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{b.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTASection
            title="Sumarte es simple"
            description="Coordinamos una reunión para presentarte el modelo de trabajo, responder todas tus preguntas y ver el primer caso juntos."
            context="orthodontist"
            ctaLabel="Quiero trabajar con STICK"
            secondary={{ label: 'Ver cómo funciona', href: '/ortodoncistas/como-trabajamos' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
