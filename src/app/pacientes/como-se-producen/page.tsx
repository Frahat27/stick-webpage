import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: '¿Cómo se producen los alineadores? | STICK',
  description:
    'Conocé el proceso de fabricación de los alineadores STICK: desde el escaneo 3D hasta el producto terminado en tus manos. Tecnología, materiales y control de calidad.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/como-se-producen' },
};

const steps = [
  {
    step: '01',
    title: 'Escaneo intraoral 3D',
    desc: 'Con un escáner de última generación capturamos tu dentición completa en minutos. Sin moldes de alginato, sin incomodidad. El resultado es un modelo digital preciso al décimo de milímetro.',
    color: 'bg-lime-300',
    detail: '~15 minutos · Sin contacto · Alta precisión',
  },
  {
    step: '02',
    title: 'Diagnóstico y plan de tratamiento',
    desc: 'El ortodoncista evalúa el modelo digital y diseña el plan de movimiento diente a diente. Cada etapa queda documentada antes de fabricar cualquier pieza.',
    color: 'bg-brand-100',
    detail: 'Revisado y aprobado por el profesional',
  },
  {
    step: '03',
    title: 'Simulación y aprobación',
    desc: 'Te mostramos una simulación 3D del resultado esperado. Vos y tu ortodoncista aprueban el plan antes de continuar. Sin sorpresas.',
    color: 'bg-lime-200',
    detail: 'Aprobación previa al fabricado',
  },
  {
    step: '04',
    title: 'Impresión 3D de los modelos',
    desc: 'Con el plan aprobado, imprimimos en 3D los modelos de cada etapa de tratamiento con resinas de alta resolución. Cada modelo corresponde exactamente a la posición dentaria deseada en esa etapa.',
    color: 'bg-brand-100',
    detail: 'Alta resolución · Geometría precisa',
  },
  {
    step: '05',
    title: 'Termoformado del material',
    desc: 'Sobre cada modelo 3D se termoforma una lámina de material termoplástico médico — transparente, resistente y biocompatible. El resultado: un alineador que se adapta perfectamente a esa etapa.',
    color: 'bg-lime-300',
    detail: 'Material biocompatible · Sin BPA',
  },
  {
    step: '06',
    title: 'Corte, pulido y control de calidad',
    desc: 'Cada alineador se recorta con precisión, se puliría el borde para máxima comodidad y se verifica antes de entregarlo. El control de calidad es manual y visual en cada pieza.',
    color: 'bg-lime-200',
    detail: 'Control pieza por pieza',
  },
  {
    step: '07',
    title: 'Entrega en ~7 días',
    desc: 'El set de alineadores para tu primera etapa llega a la clínica en aproximadamente 7 días hábiles. Lo mismo aplica para rediseños o etapas adicionales.',
    color: 'bg-brand-100',
    detail: '~7 días hábiles desde el escaneo',
  },
];

const materials = [
  {
    title: 'Termoplástico médico',
    desc: 'Material transparente de uso odontológico, sin BPA, aprobado para contacto prolongado con la mucosa oral.',
  },
  {
    title: 'Resinas para impresión 3D',
    desc: 'Resinas de alta resolución para la fabricación de modelos. Permiten reproducir geometrías dentales complejas con exactitud.',
  },
  {
    title: 'Proceso en condiciones controladas',
    desc: 'El termoformado y el corte se realizan en un entorno limpio y controlado para garantizar la calidad del producto final.',
  },
];

export default function ComoSeProducenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-950 to-brand-600 text-white pt-12 pb-10">
        <Container>
          <div className="max-w-2xl">
            <p className="text-lime-300 text-sm font-semibold tracking-widest uppercase mb-2">Fabricación</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              ¿Cómo se hacen los alineadores?
            </h1>
            <p className="text-neutral-200 text-lg leading-relaxed">
              Cada alineador que usás es fabricado a partir de tu escaneo. Te contamos el proceso completo: desde el modelo 3D hasta el producto en tus manos.
            </p>
          </div>
        </Container>
      </section>

      {/* Process steps */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">El proceso paso a paso</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-100 hidden sm:block" />

              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-5 sm:gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center font-black text-brand-800 text-sm`}>
                        {s.step}
                      </div>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5 flex-1">
                      <h3 className="font-bold text-neutral-900 mb-2">{s.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                      <span className="inline-block bg-white border border-neutral-200 rounded-full px-3 py-1 text-xs text-neutral-500 font-medium">
                        {s.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Materials */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Materiales y estándares</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {materials.map((m) => (
                <div key={m.title} className="bg-white border border-neutral-100 rounded-2xl p-6">
                  <h3 className="font-bold text-neutral-900 mb-2 text-sm">{m.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Key fact */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto bg-lime-50 border border-lime-200 rounded-2xl p-6 text-center">
            <p className="text-brand-700 font-black text-4xl mb-2">~7 días</p>
            <p className="text-neutral-700 font-semibold mb-2">desde el escaneo hasta tus alineadores</p>
            <p className="text-neutral-500 text-sm">
              El mismo tiempo aplica para etapas adicionales y rediseños durante el tratamiento.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <CTASection
            title="Empezá con el escaneo"
            description="El primer paso es el escaneo 3D. Digital, sin moldes, en ~15 minutos. Coordinalo por WhatsApp ahora."
            context="patient"
            ctaLabel="Coordinar mi escaneo"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
