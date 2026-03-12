import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';
import { processSteps, secondStageSteps } from '@/data/process';

export const metadata: Metadata = {
  title: 'Cómo funciona el tratamiento de alineadores invisibles | STICK',
  description:
    'El proceso completo de alineadores invisibles STICK: escaneo, diseño, inicio, controles mensuales, rediseño y finalización. Tiempos reales, sin letra chica.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/como-funciona' },
};

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">El proceso</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Cómo funciona el tratamiento
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Transparencia desde el primer turno. Cada paso explicado para que sepas exactamente qué esperar.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Primera etapa: del escaneo al resultado
            </h2>

            <div className="relative">
              {processSteps.map((step, i) => (
                <div key={step.id} className="flex gap-5 mb-7 last:mb-0">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-black text-base shadow-md">
                      {step.id}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-400 to-brand-200 mt-3 min-h-[2.5rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 flex-1">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className="text-xl">{step.icon}</span>
                      <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
                      {step.duration && (
                        <span className="ml-auto text-xs text-brand-600 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full font-medium">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-700 leading-relaxed mb-3">{step.description}</p>
                    {step.detail && (
                      <p className="text-sm text-neutral-500 leading-relaxed border-l-2 border-brand-200 pl-4 italic">
                        {step.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resultado típico */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Resultado: sonrisa alineada</h3>
              <p className="text-neutral-600 text-sm">
                Tiempo estimado para un caso estándar: <strong>6 a 10 meses</strong>. Los casos más complejos pueden requerir más tiempo o una segunda etapa.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Segunda etapa */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">¿Y si necesita segunda etapa?</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-5">
                En algunos casos, después de la primera etapa, quedan movimientos pendientes. Cuando eso ocurre, hacemos una segunda etapa. El proceso es más corto y ya sabés cómo funciona.
              </p>
              <div className="space-y-4">
                {secondStageSteps.map((step) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="w-9 h-9 bg-brand-50 border border-brand-200 rounded-full flex items-center justify-center text-base flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-neutral-900 text-sm">{step.title}</span>
                        {step.duration && (
                          <span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{step.duration}</span>
                        )}
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Qué incluye */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">¿Qué incluye el tratamiento?</h2>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Imagen */}
              <div className="rounded-2xl overflow-hidden bg-neutral-50 aspect-[4/5] lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src="/Estuche 2.png"
                  alt="Kit de inicio STICK Alineadores"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Checklist */}
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                <p className="text-brand-800 font-semibold text-lg mb-5">
                  Incluye todo hasta que la persona se va con su sonrisa alineada.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Escaneo digital inicial',
                    'Diseño 3D y simulación',
                    'Todos los alineadores de la etapa',
                    'Attachments si corresponde',
                    'Kit de higiene inicial',
                    'Controles mensuales',
                    'Rediseños si aplica',
                    'Contenciones al finalizar',
                    'Fotos finales y certificado',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-brand-900">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Links relacionados */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-3">Seguí explorando</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/pacientes/antes-y-despues" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Antes y después</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Casos reales documentados con fotos del resultado final.</p>
              </Link>

              <Link href="/pacientes/precios" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Precios y financiación</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Cuánto cuesta el tratamiento y qué opciones de pago hay.</p>
              </Link>

              <Link href="/pacientes/preguntas-frecuentes" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Preguntas frecuentes</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Las dudas más comunes sobre el tratamiento respondidas.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title="Coordiná tu escaneo inicial"
            description="El primer turno es el escaneo: sin moldes, sin dolor, sin compromiso. En ~7 días tenés la simulación de tu tratamiento."
            context="patient"
            ctaLabel="Coordinar escaneo por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
