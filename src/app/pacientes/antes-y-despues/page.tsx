import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CTASection from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Antes y después – Resultados reales de alineadores | STICK',
  description:
    'Casos reales documentados con fotos de antes y después. Alineadores invisibles STICK con seguimiento ortodóncico. Resultados concretos en distintos tipos de maloclusión.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/antes-y-despues' },
};

const cases = [
  {
    id: 1,
    src: '/images/before-after/1.png',
    alt: 'Antes y después - Caso 1: apiñamiento frontal',
    label: 'Apiñamiento frontal',
    duration: '8 meses',
  },
  {
    id: 2,
    src: '/images/before-after/2.png',
    alt: 'Antes y después - Caso 2: apiñamiento inferior',
    label: 'Apiñamiento inferior',
    duration: '6 meses',
  },
  {
    id: 3,
    src: '/images/before-after/3.png',
    alt: 'Antes y después - Caso 3: mordida lateral',
    label: 'Vista lateral',
    duration: '10 meses',
  },
  {
    id: 4,
    src: '/images/before-after/1B.png',
    alt: 'Antes y después - Caso 4: sonrisa frontal',
    label: 'Sonrisa frontal',
    duration: '7 meses',
  },
  {
    id: 5,
    src: '/images/before-after/2B.png',
    alt: 'Antes y después - Caso 5: alineación general',
    label: 'Alineación general',
    duration: '9 meses',
  },
  {
    id: 6,
    src: '/images/before-after/Facundo Dyzel - AyD.png',
    alt: 'Antes y después - Caso Facundo: corrección de apiñamiento',
    label: 'Corrección total',
    duration: '7 meses',
  },
];

export default function AntesYDespuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Resultados reales</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Antes y después
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Casos documentados con fotos reales de nuestros pacientes. Sin filtros, sin renders.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {[
              { value: '+100', label: 'Casos documentados' },
              { value: '6–12m', label: 'Duración promedio' },
              { value: '22hs', label: 'Uso diario recomendado' },
              { value: '0$', label: 'Rediseños sin cargo extra' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl sm:text-4xl font-black text-brand-600 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-800">{c.label}</span>
                  <span className="text-xs bg-brand-50 text-brand-700 border border-brand-100 px-3 py-1 rounded-full font-medium">{c.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-400 mt-6 italic">
            Todos los casos son de pacientes reales tratados con alineadores STICK con supervisión ortodóncica.
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title="¿Querés ver si sos candidato/a?"
            description="Con el escaneo inicial podemos decirte qué resultado esperar en tu caso específico. Sin compromiso."
            context="before-after"
            ctaLabel="Coordinar consulta por WhatsApp"
            secondary={{ label: 'Ver cómo funciona el proceso', href: '/pacientes/como-funciona' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
