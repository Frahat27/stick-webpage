import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Precios de alineadores invisibles STICK | Transparente y sin letra chica',
  description:
    'Precios claros y honestos de los alineadores STICK. Qué incluye, cómo se forma el valor y opciones de financiación. Sin costos ocultos.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/precios' },
};

export default function PreciosPage() {
  const waUrl = buildWhatsAppUrl('pricing');
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Precios</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Transparente y sin letra chica
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              El precio cubre todo el tratamiento. Sin cobros por control, sin extras por rediseño. Una sola inversión, resultado incluido.
            </p>
          </div>
        </Container>
      </section>

      {/* Precios */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">

            {/* Contexto */}
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-brand-900 mb-1">El tratamiento se divide en etapas</p>
                <p className="text-brand-700 text-sm leading-relaxed">
                  El 90% de los casos se resuelven en 1 o 2 etapas. Te damos una cotización exacta después de analizar tu caso. Sin sorpresas. Somos productores con marca propia, por eso tenemos los precios más competitivos del mercado.
                </p>
              </div>
            </div>

            {/* Cards de etapas */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Etapa 1 */}
              <div className="bg-brand-600 text-white rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-lg mb-5">
                    1
                  </div>
                  <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest mb-1">Primera etapa</p>
                  <p className="text-4xl font-black mb-1">USD 1.100</p>
                  <p className="text-brand-200 text-sm mb-4">~6 meses · 22–24 alineadores</p>
                  <div className="bg-lime-300/20 border border-lime-300/30 rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-lime-300 text-sm font-semibold">10% off pagando en efectivo</span>
                  </div>
                </div>
              </div>

              {/* Etapa 2 */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-50" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-black text-lg mb-5 text-brand-700">
                    2
                  </div>
                  <p className="text-brand-600 text-sm font-semibold uppercase tracking-widest mb-1">Segunda etapa</p>
                  <p className="text-4xl font-black text-neutral-900 mb-1">USD 700</p>
                  <p className="text-neutral-500 text-sm mb-4">Si el caso la requiere</p>
                  <div className="bg-brand-50 border border-brand-100 rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-brand-600 text-sm font-semibold">10% off pagando en efectivo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control mensual */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 mb-1">Control mensual</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500 uppercase tracking-wide">Efectivo</span>
                      <span className="font-bold text-neutral-900">$60.000</span>
                    </div>
                    <div className="text-neutral-300">·</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500 uppercase tracking-wide">Transferencia</span>
                      <span className="font-bold text-neutral-900">$65.000</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1.5">* Ajuste por IPC</p>
                </div>
              </div>
            </div>

            {/* Qué incluye */}
            <h2 className="text-2xl font-bold text-neutral-900 mb-5">¿Qué incluye el precio?</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {[
                { item: 'Escaneo digital inicial', desc: 'Sin moldes ni incomodidades' },
                { item: 'Simulación 3D personalizada', desc: 'Ves el resultado antes de empezar' },
                { item: 'Todos los alineadores de la etapa', desc: 'Sin cobro por alineador individual' },
                { item: 'Attachments si corresponde', desc: 'Material y colocación incluidos' },
                { item: 'Kit de higiene inicial', desc: 'Para empezar con todo' },
                { item: 'Controles mensuales', desc: 'Seguimiento clínico real' },
                { item: 'Rediseños si aplica', desc: 'Sin costo adicional' },
                { item: 'Contenciones al finalizar', desc: 'Para mantener el resultado' },
              ].map(({ item, desc }) => (
                <div key={item} className="flex items-start gap-3 bg-neutral-50 border border-neutral-100 rounded-xl p-4">
                  <div className="w-5 h-5 rounded-full bg-lime-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{item}</p>
                    <p className="text-xs text-neutral-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Financiación */}
            <div className="bg-brand-950 text-white rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">Opciones de pago</h2>
                  <p className="text-neutral-400 text-sm">Efectivo, transferencia bancaria y tarjeta de crédito. Consultanos por cuotas sin interés disponibles según el medio de pago.</p>
                </div>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-300 text-brand-800 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-lime-200 transition-colors"
              >
                Consultar opciones de pago →
              </a>
            </div>

          </div>
        </Container>
      </Section>

      {/* Links */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-4">Seguí explorando</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/pacientes/como-funciona" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Cómo funciona</p>
                <p className="text-xs text-neutral-500 leading-relaxed">El proceso paso a paso, desde el escaneo hasta las contenciones.</p>
              </Link>
              <Link href="/pacientes/antes-y-despues" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Antes y después</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Casos reales documentados con fotos del resultado final.</p>
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
            title="¿Querés saber el precio de tu caso?"
            description="Escribinos por WhatsApp y te damos una cotización antes del primer turno. Sin compromiso."
            context="pricing"
            ctaLabel="Consultar precio por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
