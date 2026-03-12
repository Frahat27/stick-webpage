import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Alineadores vs brackets: diferencias reales | STICK',
  description:
    'Comparativa honesta entre alineadores invisibles y brackets metálicos o cerámicos. Cuándo conviene cada opción, ventajas y limitaciones reales.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/alineadores-vs-brackets' },
};

const CheckIcon = () => (
  <div className="w-6 h-6 rounded-full bg-lime-300 flex items-center justify-center flex-shrink-0">
    <svg className="w-3.5 h-3.5 text-brand-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const WarnIcon = () => (
  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  </div>
);

const NeutralIcon = () => (
  <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  </div>
);

type RowStatus = 'check' | 'warn' | 'neutral';

const comparison: { feature: string; aligners: { text: string; status: RowStatus }; brackets: { text: string; status: RowStatus } }[] = [
  {
    feature: 'Visibilidad',
    aligners: { text: 'Casi imperceptibles', status: 'check' },
    brackets: { text: 'Visibles (metálicos) o discretos (cerámicos)', status: 'warn' },
  },
  {
    feature: 'Removibles',
    aligners: { text: 'Sí — sacás para comer e higienizarte', status: 'check' },
    brackets: { text: 'No — fijos durante todo el tratamiento', status: 'neutral' },
  },
  {
    feature: 'Higiene dental',
    aligners: { text: 'Sin restricciones, cepillado normal', status: 'check' },
    brackets: { text: 'Más compleja, requiere instrumental especial', status: 'warn' },
  },
  {
    feature: 'Dieta',
    aligners: { text: 'Sin restricciones alimentarias', status: 'check' },
    brackets: { text: 'Restricciones (duros, pegajosos)', status: 'warn' },
  },
  {
    feature: 'Comodidad',
    aligners: { text: 'Sin bordes filosos ni irritación', status: 'check' },
    brackets: { text: 'Pueden irritar la mucosa al inicio', status: 'warn' },
  },
  {
    feature: 'Casos complejos',
    aligners: { text: 'No siempre indicados para alta complejidad', status: 'warn' },
    brackets: { text: 'Versátiles para casos severos', status: 'check' },
  },
  {
    feature: 'Compromiso del paciente',
    aligners: { text: 'Requiere uso 22h/día', status: 'warn' },
    brackets: { text: 'Fijos, siempre actúan', status: 'check' },
  },
  {
    feature: 'Tiempo promedio',
    aligners: { text: '6 a 10 meses (casos moderados)', status: 'check' },
    brackets: { text: '12 a 24 meses (casos variados)', status: 'neutral' },
  },
];

const StatusIcon = ({ status }: { status: RowStatus }) => {
  if (status === 'check') return <CheckIcon />;
  if (status === 'warn') return <WarnIcon />;
  return <NeutralIcon />;
};

export default function AlineadoresVsBracketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Comparativa</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Alineadores vs brackets: sin mentiras
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Los alineadores no son para todos los casos. Acá te explicamos cuándo son la mejor opción y cuándo no.
            </p>
          </div>
        </Container>
      </section>

      {/* Tabla comparativa */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Column headers */}
            <div className="grid grid-cols-3 gap-3 mb-3 px-1">
              <div /> {/* Feature label column */}
              <div className="bg-brand-600 text-white rounded-xl px-4 py-3 text-center">
                <p className="text-xs font-semibold text-brand-200 uppercase tracking-widest mb-0.5">STICK</p>
                <p className="font-bold text-base">Alineadores</p>
              </div>
              <div className="bg-neutral-100 rounded-xl px-4 py-3 text-center">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-0.5">Tradicional</p>
                <p className="font-bold text-base text-neutral-700">Brackets</p>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-3 rounded-xl overflow-hidden ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white border border-neutral-100'}`}
                >
                  {/* Feature */}
                  <div className="px-4 py-4 flex items-center">
                    <span className="text-base font-semibold text-neutral-700">{row.feature}</span>
                  </div>

                  {/* Alineadores */}
                  <div className="px-4 py-4 bg-brand-50/60 flex items-start gap-2.5">
                    <StatusIcon status={row.aligners.status} />
                    <span className="text-base text-brand-900 leading-snug">{row.aligners.text}</span>
                  </div>

                  {/* Brackets */}
                  <div className="px-4 py-4 flex items-start gap-2.5">
                    <StatusIcon status={row.brackets.status} />
                    <span className="text-base text-neutral-600 leading-snug">{row.brackets.text}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </Section>

      {/* Cuándo convienen */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">¿Cuándo elegir cada opción?</h2>
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Alineadores */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-900">Los alineadores son ideales si...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Querés un tratamiento discreto para tu vida profesional o social',
                    'Tenés maloclusión leve a moderada',
                    'Preferís comer y cepillarte con normalidad',
                    'Sos adulto y podés comprometerte con el uso (22h/día)',
                    'La estética y la comodidad son prioridad',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-lime-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-brand-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brackets */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-neutral-900">Pueden no ser la mejor opción si...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'El caso requiere alta complejidad (mordidas severas, extracciones)',
                    'No podés comprometerte con el uso constante',
                    'Hay problemas periodontales activos sin resolver',
                    'Se necesitan movimientos muy específicos que los alineadores no pueden lograr',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-5 bg-brand-50 border border-brand-100 rounded-xl px-5 py-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-brand-800 leading-relaxed">
                La indicación correcta depende del diagnóstico individual. En la consulta inicial evaluamos si sos candidato/a para alineadores y qué resultado podés esperar.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Cuál es la mejor opción para tu caso?"
            description="Con el escaneo inicial podemos decirte si sos candidato/a para alineadores y qué resultado esperar. Sin compromiso."
            context="patient"
            ctaLabel="Coordinar consulta por WhatsApp"
            secondary={{ label: 'Ver resultados reales', href: '/pacientes/antes-y-despues' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
