import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'STICK vs otras marcas de alineadores | Comparativa honesta',
  description:
    'Diferencias entre STICK y otras opciones de alineadores invisibles. Comparativa honesta: supervisión clínica, precio, proceso y quién tiene el control.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/stick-vs-otros' },
};

type Status = true | false | 'parcial';

const comparison: { feature: string; stick: Status; stickNote: string; others: Status; othersNote: string }[] = [
  {
    feature: 'Supervisión de un ortodoncista',
    stick: true,
    stickNote: 'Cada caso es aprobado y seguido por un profesional',
    others: 'parcial',
    othersNote: 'Varía según la marca; algunas son 100% remotas sin seguimiento presencial',
  },
  {
    feature: 'Escaneo intraoral 3D presencial',
    stick: true,
    stickNote: 'Sin moldes, sin impresiones físicas',
    others: 'parcial',
    othersNote: 'Algunas marcas piden que el paciente se tome impresiones en casa',
  },
  {
    feature: 'Aprobación del plan antes de fabricar',
    stick: true,
    stickNote: 'El profesional y el paciente aprueban la simulación',
    others: false,
    othersNote: 'Muchas marcas fabrican sin mostrar simulación previa al paciente',
  },
  {
    feature: 'Rediseños incluidos si hay desviación',
    stick: true,
    stickNote: 'Si el caso se desvía del plan, se rediseña',
    others: 'parcial',
    othersNote: 'Depende del contrato; algunas cobran por cada rediseño',
  },
  {
    feature: 'Control clínico en cada etapa',
    stick: true,
    stickNote: 'Controles presenciales con el ortodoncista',
    others: false,
    othersNote: 'Muchos modelos son puramente remotos (fotos por app)',
  },
  {
    feature: 'Fabricación local (Argentina)',
    stick: true,
    stickNote: 'Producción local = tiempos cortos y comunicación directa',
    others: false,
    othersNote: 'La mayoría importa desde el exterior; tiempos más largos',
  },
  {
    feature: 'Tiempo de entrega',
    stick: true,
    stickNote: '~7 días desde el escaneo',
    others: 'parcial',
    othersNote: 'Puede ser de 3 a 6 semanas en marcas internacionales',
  },
];

const CheckIcon = () => (
  <div className="w-7 h-7 rounded-full bg-lime-300 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-brand-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const WarnIcon = () => (
  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  </div>
);

const XIcon = () => (
  <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
);

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === true) return <CheckIcon />;
  if (status === 'parcial') return <WarnIcon />;
  return <XIcon />;
};

export default function StickVsOtrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-950 to-brand-600 text-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-lime-300 text-sm font-semibold tracking-widest uppercase mb-2">Comparativa</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              STICK vs otras opciones
            </h1>
            <p className="text-neutral-200 text-lg leading-relaxed">
              No todas las marcas de alineadores son iguales. Acá una comparativa honesta para que puedas decidir informado/a.
            </p>
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Legend */}
            <div className="flex flex-wrap gap-5 mb-8">
              <span className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-6 h-6 rounded-full bg-lime-300 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-brand-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                Sí / cumple
              </span>
              <span className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                </div>
                Parcial / varía
              </span>
              <span className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                No / generalmente no
              </span>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-3 gap-3 mb-3 px-1">
              <div />
              <div className="bg-brand-600 text-white rounded-xl px-4 py-3 text-center">
                <p className="text-xs font-semibold text-brand-200 uppercase tracking-widest mb-0.5">Nosotros</p>
                <p className="font-bold text-base">STICK</p>
              </div>
              <div className="bg-neutral-100 rounded-xl px-4 py-3 text-center">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-0.5">Competencia</p>
                <p className="font-bold text-base text-neutral-700">Otras marcas</p>
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
                    <span className="text-base font-semibold text-neutral-700 leading-snug">{row.feature}</span>
                  </div>

                  {/* STICK */}
                  <div className="px-4 py-4 bg-brand-50/60 flex flex-col items-center gap-2 text-center">
                    <StatusIcon status={row.stick} />
                    <span className="text-sm text-brand-900 leading-snug">{row.stickNote}</span>
                  </div>

                  {/* Otras marcas */}
                  <div className="px-4 py-4 flex flex-col items-center gap-2 text-center">
                    <StatusIcon status={row.others} />
                    <span className="text-sm text-neutral-500 leading-snug">{row.othersNote}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </Section>

      {/* Key differentiator callout */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-950 text-white rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">El control clínico no es opcional</h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                La principal diferencia de STICK no es el precio ni el material: es que cada tratamiento tiene un ortodoncista real que lo revisa, lo aprueba y lo sigue. Los modelos 100% remotos eliminan esa capa de seguridad.
              </p>
              <p className="text-neutral-400 text-sm">
                No todos los casos son para alineadores. Un profesional puede identificar cuándo no son la opción correcta — y eso también es valor.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Querés saber si STICK es para tu caso?"
            description="El escaneo inicial es el primer paso. En ese turno también hacemos el diagnóstico y te decimos con honestidad si los alineadores son la opción correcta."
            context="patient"
            ctaLabel="Coordinar escaneo por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
