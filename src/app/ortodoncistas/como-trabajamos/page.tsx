import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Cómo trabajamos con ortodoncistas | STICK Alineadores',
  description:
    'El flujo de colaboración entre STICK y los profesionales de ortodoncia. Proceso claro, tecnología digital y modelo flexible.',
  alternates: { canonical: 'https://stickalineadores.com.ar/ortodoncistas/como-trabajamos' },
};

const steps = [
  {
    id: 1,
    title: 'Derivación del caso',
    description:
      'El profesional nos comparte el caso: puede ser con radiografías y fotos previas, o directamente coordinando el escaneo en nuestro consultorio.',
    detail: 'Modelo flexible: el ortodoncista decide si hace el escaneo en su consultorio (si tiene scanner) o lo coordinamos nosotros.',
  },
  {
    id: 2,
    title: 'Escaneo digital',
    description:
      'Realizamos el escaneo intraoral digital en Virrey del Pino 4191 3C. El modelo 3D es la base del diagnóstico y el diseño.',
    detail: '~15 minutos. Sin moldes ni incomodidades para el paciente.',
  },
  {
    id: 3,
    title: 'Diseño del plan',
    description:
      'Nuestro equipo genera el plan de tratamiento con el movimiento programado de cada diente. El profesional revisa y aprueba antes de fabricar.',
    detail: 'El ortodoncista tiene control sobre el diseño: puede solicitar modificaciones antes de aprobar.',
  },
  {
    id: 4,
    title: 'Fabricación',
    description:
      'Fabricamos los alineadores de la primera etapa con materiales de calidad médica. El tiempo de fabricación es de aproximadamente 7 días desde el escaneo.',
  },
  {
    id: 5,
    title: 'Entrega y educación al paciente',
    description:
      'Consulta de inicio (~60 min): colocación de attachments, entrega de los primeros alineadores, educación de uso y kit de higiene.',
    detail: 'Esta consulta puede ser con el equipo STICK o con el profesional, según el modelo acordado.',
  },
  {
    id: 6,
    title: 'Controles mensuales y seguimiento',
    description:
      'Evaluación mensual de la evolución. Si hay desvíos, coordinamos rediseño y reimpresión. Documentamos cada control.',
    detail: 'El profesional puede participar en los controles o delegarlos a STICK. Modelo acordado caso a caso.',
  },
  {
    id: 7,
    title: 'Finalización',
    description:
      'Retiro de attachments, fotos finales, entrega de contenciones y certificado. El caso queda documentado.',
  },
];

export default function ComoTrabajamosPage() {
  return (
    <>
      <section className="bg-brand-950 text-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-2">Flujo de trabajo</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">Cómo trabajamos</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Un proceso claro, flexible y con el control clínico donde debe estar: en el profesional.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {steps.map((step, i) => (
                <div key={step.id} className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center font-black text-base shadow-md">
                      {step.id}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-neutral-200 mt-3 min-h-[2.5rem]" />
                    )}
                  </div>
                  <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 flex-1">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-700 leading-relaxed mb-2">{step.description}</p>
                    {step.detail && (
                      <p className="text-sm text-neutral-500 border-l-2 border-neutral-300 pl-3 italic">
                        {step.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-4">Seguí explorando</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/ortodoncistas/beneficios" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Por qué trabajar con STICK</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Tecnología, tiempos, soporte y modelo de colaboración para el profesional.</p>
              </Link>

              <Link href="/ortodoncistas/faq" className="group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-brand-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-neutral-900 mb-1">Preguntas frecuentes</p>
                <p className="text-xs text-neutral-500 leading-relaxed">Las dudas más comunes de los profesionales antes de empezar a trabajar con STICK.</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Querés sumarte a trabajar con STICK?"
            description="Coordinamos una reunión para contarte el modelo de trabajo en detalle y responder todas tus preguntas."
            context="orthodontist"
            ctaLabel="Escribir por WhatsApp"
            secondary={{ label: 'Ir al formulario de contacto', href: '/ortodoncistas/contacto' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
