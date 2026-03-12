import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: '¿Sos candidato/a para alineadores invisibles? | STICK',
  description:
    'Descubrí si los alineadores invisibles STICK son la opción correcta para tu caso. Casos indicados, limitaciones honestas y el siguiente paso.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/sos-apto' },
};

function IllustrationCrowded() {
  return (
    <svg viewBox="0 0 120 58" fill="none" aria-hidden="true" className="w-full h-full">
      <path d="M4 32 Q60 10 116 32 L116 40 Q60 18 4 40 Z" fill="#eef1f8" />
      <path d="M4 32 Q60 10 116 32" stroke="#3d4f8a" strokeWidth="2" strokeLinecap="round" />
      <rect x="9"  y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(-11 14 36)" />
      <rect x="19" y="21" width="12" height="22" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(8 25 32)" />
      <rect x="32" y="18" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(-6 39 31)" />
      <rect x="48" y="18" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(7 55 31)" />
      <rect x="63" y="21" width="12" height="22" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(-8 69 32)" />
      <rect x="74" y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(11 79 36)" />
    </svg>
  );
}

function IllustrationDiastema() {
  return (
    <svg viewBox="0 0 120 58" fill="none" aria-hidden="true" className="w-full h-full">
      <path d="M4 32 Q60 10 116 32 L116 40 Q60 18 4 40 Z" fill="#eef1f8" />
      <path d="M4 32 Q60 10 116 32" stroke="#3d4f8a" strokeWidth="2" strokeLinecap="round" />
      <rect x="5"   y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="19"  y="22" width="12" height="23" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="34"  y="19" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      {/* diastema gap */}
      <rect x="72"  y="19" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="89"  y="22" width="12" height="23" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="104" y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      {/* gap indicator */}
      <line x1="53" y1="22" x2="53" y2="47" stroke="#dcf09a" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" />
      <line x1="68" y1="22" x2="68" y2="47" stroke="#dcf09a" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" />
    </svg>
  );
}

function IllustrationCrossbite() {
  return (
    <svg viewBox="0 0 120 66" fill="none" aria-hidden="true" className="w-full h-full">
      {/* Upper arch */}
      <path d="M8 22 Q60 6 112 22 L112 28 Q60 12 8 28 Z" fill="#eef1f8" />
      <path d="M8 22 Q60 6 112 22" stroke="#3d4f8a" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="14" y="18" width="10" height="14" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      <rect x="27" y="15" width="11" height="17" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      <rect x="41" y="13" width="12" height="19" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      <rect x="56" y="13" width="12" height="19" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      <rect x="71" y="15" width="11" height="17" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      <rect x="85" y="18" width="10" height="14" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.3" />
      {/* Lower arch – shifted right (crossbite) */}
      <path d="M18 50 Q70 66 118 50 L118 44 Q70 60 18 44 Z" fill="#f0f1f6" />
      <path d="M18 50 Q70 66 118 50" stroke="#3d4f8a" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 2" />
      <rect x="24" y="35" width="10" height="14" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      <rect x="37" y="32" width="11" height="17" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      <rect x="51" y="30" width="12" height="19" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      <rect x="66" y="30" width="12" height="19" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      <rect x="81" y="32" width="11" height="17" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      <rect x="95" y="35" width="10" height="14" rx="2" fill="white" stroke="#94a3b8" strokeWidth="1.3" />
      {/* lateral shift arrow */}
      <path d="M8 57 L18 57" stroke="#3d4f8a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 54 L18 57 L14 60" stroke="#3d4f8a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IllustrationRelapse() {
  return (
    <svg viewBox="0 0 120 58" fill="none" aria-hidden="true" className="w-full h-full">
      <path d="M4 32 Q60 10 116 32 L116 40 Q60 18 4 40 Z" fill="#eef1f8" />
      <path d="M4 32 Q60 10 116 32" stroke="#3d4f8a" strokeWidth="2" strokeLinecap="round" />
      {/* Mostly aligned, only centrals slightly rotated */}
      <rect x="8"  y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="22" y="22" width="12" height="23" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="37" y="19" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(-7 44 32)" />
      <rect x="53" y="19" width="14" height="26" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" transform="rotate(6 60 32)" />
      <rect x="70" y="22" width="12" height="23" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
      <rect x="85" y="27" width="11" height="18" rx="2" fill="white" stroke="#3d4f8a" strokeWidth="1.4" />
    </svg>
  );
}

const illustratedCases = [
  {
    id: 'crowded',
    title: 'Dientes chuecos o apiñados',
    desc: 'Dientes superpuestos o rotados, de leve a moderado. El caso más frecuente tratado con alineadores.',
    Illustration: IllustrationCrowded,
  },
  {
    id: 'diastema',
    title: 'Espacios entre dientes',
    desc: 'Diastemas o separaciones entre uno o más dientes. Se cierran de forma gradual y controlada.',
    Illustration: IllustrationDiastema,
  },
  {
    id: 'crossbite',
    title: 'Mordida cruzada leve',
    desc: 'Cuando algunos dientes superiores ocluyen por dentro de los inferiores en casos leves.',
    Illustration: IllustrationCrossbite,
  },
  {
    id: 'relapse',
    title: 'Recaída post-ortodoncia',
    desc: 'Correcciones menores después de un tratamiento previo con brackets u otros alineadores.',
    Illustration: IllustrationRelapse,
  },
];

const additionalCases = [
  'Adultos con dentición permanente completa',
  'Adolescentes con dientes definitivos',
  'Personas que buscan discreción durante el tratamiento',
];

const notSuitableCases = [
  {
    label: 'Alta complejidad esquelética',
    desc: 'Discrepancias óseas severas que requieren ortopedia o cirugía.',
  },
  {
    label: 'Extracciones necesarias (en muchos casos)',
    desc: 'Casos que requieren remover piezas dentales para generar espacio.',
  },
  {
    label: 'Problemas periodontales activos',
    desc: 'Las encías deben estar sanas antes de iniciar cualquier tratamiento ortodóncico.',
  },
];

export default function SosAptoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
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

      {/* Illustrated cases – accordion */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-lime-50 text-brand-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 border border-lime-200">
                Buena indicación
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">¿En qué casos funcionan bien?</h2>
            </div>

            <div className="divide-y divide-neutral-100 border border-neutral-100 rounded-2xl overflow-hidden shadow-sm mb-6">
              {illustratedCases.map(({ id, title, desc, Illustration }) => (
                <details key={id} className="group bg-white">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer [list-style:none] [&::-webkit-details-marker]:hidden hover:bg-brand-50/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-lime-300 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg font-bold text-neutral-900">{title}</span>
                    </div>
                    <svg
                      className="w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                    <div className="grid md:grid-cols-2 gap-5 items-center mt-3">
                      <div className="bg-brand-50 rounded-xl p-6 flex items-center justify-center">
                        <div className="w-full max-w-[200px]">
                          <Illustration />
                        </div>
                      </div>
                      <p className="text-base text-neutral-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Additional positive cases as chips */}
            <div className="flex flex-wrap gap-2">
              {additionalCases.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-lime-50 border border-lime-200 px-4 py-2 rounded-full text-sm text-brand-900 font-medium"
                >
                  <svg className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Not suitable */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-neutral-100 text-neutral-500 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
                Limitaciones a considerar
              </span>
              <h2 className="text-2xl font-bold text-neutral-900">¿Cuándo puede no ser la mejor opción?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {notSuitableCases.map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-700 text-sm mb-1.5">{label}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-neutral-400 text-sm text-center italic mt-6">
              La única forma de confirmar si sos candidato/a es con el escaneo inicial y la evaluación del ortodoncista.
            </p>
          </div>
        </Container>
      </Section>

      {/* Evaluation steps */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">El proceso de evaluación</p>
              <h2 className="text-2xl font-bold text-neutral-900">¿Cómo sabés si aplicás?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { step: '1', title: 'Escaneo inicial', desc: 'Digital, sin moldes, ~15 minutos. Capturamos tu dentición en 3D.' },
                { step: '2', title: 'Diagnóstico', desc: 'El ortodoncista evalúa tu caso y te dice si los alineadores son la opción correcta.' },
                { step: '3', title: 'Simulación', desc: 'Si sos candidato/a, ves el resultado esperado antes de decidir si empezás.' },
              ].map((s) => (
                <div key={s.step} className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6">
                  <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center font-black text-white text-lg mb-4">
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

      {/* Related links */}
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
                <Link
                  key={l.href}
                  href={l.href}
                  className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {l.icon}
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">{l.title}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{l.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-brand-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
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
