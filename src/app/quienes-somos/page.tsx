import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: '¿Quiénes somos? | STICK Alineadores',
  description:
    'STICK es una empresa argentina de alineadores invisibles fundada por Cynthia H., odontóloga y ortodoncista. Conocé nuestra historia, valores y el equipo detrás de cada tratamiento.',
  alternates: { canonical: 'https://stickalineadores.com.ar/quienes-somos' },
};

const values = [
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Honestidad clínica',
    desc: 'No prometemos lo que no podemos cumplir. Si un caso no es para alineadores, lo decimos.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Tecnología al servicio del profesional',
    desc: 'El escáner 3D, la simulación y el control digital potencian el trabajo del ortodoncista — no lo reemplazan.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Trabajo en equipo',
    desc: 'Cada tratamiento es una colaboración entre STICK y el profesional. El control clínico siempre está en manos del ortodoncista.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Producción local',
    desc: 'Fabricamos en Argentina. Tiempos cortos, comunicación directa y soporte real cuando se necesita.',
  },
];

const differentials = [
  { label: '~10 días', sublabel: 'de entrega desde el escaneo' },
  { label: '100%', sublabel: 'casos con seguimiento ortodóncico' },
  { label: 'Local', sublabel: 'fabricación y soporte en Argentina' },
];

export default function QuienesSomosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://stickalineadores.com.ar' },
            { '@type': 'ListItem', position: 2, name: 'Quiénes somos', item: 'https://stickalineadores.com.ar/quienes-somos' },
          ],
        }) }}
      />
      {/* Hero */}
      <section className="bg-brand-950 text-white pt-12 pb-12 relative overflow-hidden">
        {/* Isotipo decorativo */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-[0.07] select-none hidden lg:block" aria-hidden="true">
          <Image src="/icons/isotipo-lima.png" alt="" width={256} height={256} className="w-full h-full object-contain" />
        </div>
        <Container>
          <div className="max-w-2xl">
            <p className="text-lime-300 text-sm font-semibold tracking-widest uppercase mb-2">Quiénes somos</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-3 leading-tight">
              STICK Alineadores
            </h1>
            <p className="text-lime-300/70 text-sm font-semibold tracking-widest mb-4 font-display">
              Corrige tu sonrisa sin cambiar tu estilo
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Somos una empresa argentina especializada en alineadores invisibles con supervisión ortodóncica. Creemos que la tecnología dental tiene que ser accesible, honesta y clínicamente responsable.
            </p>
          </div>
        </Container>
      </section>

      {/* Numbers + Sello */}
      <Section className="bg-lime-300">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            {/* Sello circular de marca */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-brand-600/20">
                <Image
                  src="/icons/sello-circular-azul.png"
                  alt="STICK Alineadores Invisibles"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Números */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 text-center">
              {differentials.map((d) => (
                <div key={d.label}>
                  <p className="text-brand-800 font-black text-4xl mb-1">{d.label}</p>
                  <p className="text-brand-700 text-sm font-medium">{d.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Fundadora */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/team/white-Photoroom (5).png"
                  alt="Cynthia H. – Odontóloga y fundadora de STICK"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-lime-300 rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
                <p className="text-brand-800 font-black text-sm">Cynthia H.</p>
                <p className="text-brand-700 text-xs">Odontóloga · Fundadora</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">La fundadora</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 leading-snug">
                "Creo en tratamientos reales, sin dolor y con resultados visibles."
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Hola, soy Cynthia, odontóloga y fundadora de STICK. Cada sonrisa que acompaño es un compromiso y una alegría.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                STICK nació de la convicción de que los alineadores invisibles pueden ser tecnológicamente avanzados y clínicamente responsables al mismo tiempo. No son excluyentes.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Cada caso pasa por mis manos. Lo evaluamos, lo diseñamos y lo seguimos hasta que la persona se va con su sonrisa alineada.
              </p>

              {/* Office */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-100">
                <Image
                  src="/images/team/Consultorio 1.jpg"
                  alt="Consultorio Cynthia H – Odontología y Ortodoncia, Belgrano CABA"
                  width={480}
                  height={280}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-xs text-neutral-400 mt-2 text-center">Belgrano, CABA</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Por qué existe STICK</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  El mercado de alineadores creció rápido — y con eso llegaron modelos 100% remotos, sin diagnóstico presencial, sin profesional real detrás.
                </p>
                <p>
                  STICK nace de la convicción de que los alineadores invisibles pueden ser tecnológicamente avanzados y clínicamente responsables al mismo tiempo. No son excluyentes.
                </p>
                <p>
                  Trabajamos con pacientes que valoran el control clínico y la transparencia. El resultado del tratamiento importa más que la facilidad del proceso.
                </p>
              </div>
            </div>
            <div className="bg-white border border-neutral-100 rounded-2xl p-5 space-y-3">
              <p className="text-brand-700 font-semibold text-sm tracking-wide uppercase">Nuestro modelo</p>
              <ul className="space-y-3 text-base text-neutral-700">
                {[
                  'Escaneo 3D presencial (sin moldes)',
                  'Diagnóstico por ortodoncista',
                  'Simulación y aprobación antes de fabricar',
                  'Fabricación local en ~10 días',
                  'Controles clínicos cada 30 días',
                  'Rediseños si el caso lo necesita',
                  'Contenciones al finalizar',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-lime-300 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-brand-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Nuestra forma de trabajar</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Lo que nos importa</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm border border-neutral-100">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1.5 leading-snug">{v.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* For orthodontists */}
      <Section className="bg-brand-950 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lime-300 text-sm font-semibold tracking-widest uppercase mb-2">Para profesionales</p>
            <h2 className="text-2xl font-bold mb-3">¿Sos ortodoncista?</h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Trabajamos con profesionales que quieren ofrecer alineadores invisibles con el soporte técnico y el modelo de trabajo que sus pacientes merecen.
            </p>
            <Link
              href="/ortodoncistas"
              className="inline-flex items-center justify-center bg-lime-300 text-brand-800 font-semibold px-6 py-3.5 rounded-full hover:bg-lime-200 transition-colors"
            >
              Ver propuesta para ortodoncistas →
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Empezamos?"
            description={"El primer paso es el escaneo 3D. Sin moldes, en ~30 minutos.\nCoordinalo ahora por WhatsApp."}
            context="patient"
            ctaLabel="Quiero mi escaneo"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
