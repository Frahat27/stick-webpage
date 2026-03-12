import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: '¿Sos candidato/a para alineadores invisibles? | STICK',
  description:
    'Descubrí si los alineadores invisibles STICK son la opción correcta para tu caso. Casos indicados, limitaciones honestas y el siguiente paso.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/sos-apto' },
};

const checks = [
  { ok: true,  label: 'Dientes chuecos o apiñados (leve a moderado)' },
  { ok: true,  label: 'Espacios entre dientes (diastemas)' },
  { ok: true,  label: 'Mordida cruzada leve' },
  { ok: true,  label: 'Adultos con dentición permanente completa' },
  { ok: true,  label: 'Adolescentes con dientes definitivos' },
  { ok: true,  label: 'Personas que buscan discreción durante el tratamiento' },
  { ok: true,  label: 'Quienes ya hicieron ortodoncia y tuvieron recaída leve' },
  { ok: false, label: 'Casos de alta complejidad esquelética' },
  { ok: false, label: 'Extracciones de piezas dentales necesarias (en muchos casos)' },
  { ok: false, label: 'Problemas periodontales activos sin resolver' },
];

export default function SosAptoPage() {
  const waUrl = buildWhatsAppUrl('patient');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-lime-100 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">¿Sos candidato/a?</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-5 leading-tight">
              ¿Los alineadores son para vos?
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              No todos los casos son iguales. Acá te contamos en qué situaciones los alineadores tienen mejor indicación — y en cuáles puede no ser la opción ideal.
            </p>
          </div>
        </Container>
      </section>

      {/* Checklist */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">¿En cuáles casos funcionan bien?</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {checks.map(({ ok, label }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    ok
                      ? 'bg-lime-50 border-lime-200'
                      : 'bg-neutral-50 border-neutral-200 opacity-75'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${ok ? 'bg-lime-300' : 'bg-neutral-200'}`}>
                    {ok
                      ? <svg className="w-3.5 h-3.5 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      : <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    }
                  </div>
                  <span className={`text-sm font-medium ${ok ? 'text-brand-900' : 'text-neutral-500'}`}>{label}</span>
                </div>
              ))}
            </div>

            <p className="text-neutral-500 text-sm text-center italic">
              La única forma de saber con certeza si sos candidato/a es con el escaneo inicial y la evaluación del ortodoncista.
            </p>
          </div>
        </Container>
      </Section>

      {/* El proceso de evaluación */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">¿Cómo sabés si aplicás?</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { step: '1', title: 'Escaneo inicial', desc: 'Digital, sin moldes, ~15 minutos. Capturamos tu dentición en 3D.', color: 'bg-lime-300' },
                { step: '2', title: 'Diagnóstico', desc: 'El ortodoncista evalúa tu caso y te dice si los alineadores son la opción correcta.', color: 'bg-brand-100' },
                { step: '3', title: 'Simulación', desc: 'Si sos candidato/a, ves el resultado esperado antes de decidir si empezás.', color: 'bg-lime-200' },
              ].map((s) => (
                <div key={s.step} className="bg-white border border-neutral-100 rounded-2xl p-6">
                  <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center font-black text-brand-700 text-lg mb-4`}>
                    {s.step}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Links relacionados */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-4">Seguí explorando</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: '/pacientes/como-funciona',
                  title: 'Cómo funciona',
                  desc: 'El proceso paso a paso, desde el escaneo hasta las contenciones.',
                  icon: (
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                },
                {
                  href: '/pacientes/antes-y-despues',
                  title: 'Antes y después',
                  desc: 'Casos reales documentados con fotos del resultado final.',
                  icon: (
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  href: '/pacientes/alineadores-vs-brackets',
                  title: 'Alineadores vs brackets',
                  desc: 'Comparativa honesta para que puedas decidir informado/a.',
                  icon: (
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {l.icon}
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">{l.title}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <CTASection
            title="La única forma de saberlo: el escaneo"
            description="En el primer turno hacemos el escaneo y el diagnóstico. Sin moldes, sin dolor, sin compromiso. Coordinalo en minutos."
            context="patient"
            ctaLabel="Coordinar mi escaneo por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
