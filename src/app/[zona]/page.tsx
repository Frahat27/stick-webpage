import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/ui/CTASection';
import { locations } from '@/data/locations';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: { zona: string };
}

// Only match slugs that follow the pattern "alineadores-invisibles-{slug}"
function getLocation(zonaParam: string) {
  const prefix = 'alineadores-invisibles-';
  if (!zonaParam.startsWith(prefix)) return null;
  const slug = zonaParam.slice(prefix.length);
  return locations.find((l) => l.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    zona: `alineadores-invisibles-${loc.slug}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = getLocation(params.zona);
  if (!loc) return {};

  return {
    title: loc.title,
    description: loc.metaDescription,
    openGraph: {
      title: loc.title,
      description: loc.metaDescription,
    },
    alternates: {
      canonical: `https://stickalineadores.com.ar/${params.zona}`,
    },
  };
}

export default function LocalPage({ params }: Props) {
  const loc = getLocation(params.zona);
  if (!loc) notFound();

  const waUrl = buildWhatsAppUrl('local', { zona: loc.zona });

  const localFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Zona {loc.zona}
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-5 leading-tight">
              Alineadores invisibles en {loc.zona}
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">{loc.intro}</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Coordinar escaneo desde {loc.zona}
            </a>
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">El proceso</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">Así funciona, paso a paso</h2>
            <p className="text-neutral-500">Transparencia desde el primer turno. Sin sorpresas ni letra chica.</p>
          </div>

          <div className="relative">
            {/* Línea conectora desktop */}
            <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-brand-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  num: 1,
                  title: 'Consulta inicial y escaneo',
                  duration: 'Turno ~30 min',
                  description: 'Realizamos el escaneo digital 3D de tu boca. Sin moldes ni incomodidades, en unos 15 minutos tenemos todo lo que necesitamos.',
                  img: '/Proceso /Escaneo.png',
                  position: 'object-center',
                },
                {
                  num: 2,
                  title: 'Diagnóstico y diseño digital',
                  duration: '~7 días',
                  description: 'El ortodoncista analiza tu escaneo y diseña el movimiento de cada diente. En aproximadamente 7 días tenés tu simulación lista para ver.',
                  img: '/Proceso /Diagnostico.png',
                  position: 'object-center',
                },
                {
                  num: 3,
                  title: 'Comienzo del tratamiento y controles mensuales',
                  duration: 'Mensual',
                  description: 'Entregamos los primeros alineadores y comenzamos los controles clínicos cada 30 días. Si hay desvíos, rediseñamos.',
                  img: '/Proceso /Seguimiento.jpg',
                  position: 'object-top',
                },
                {
                  num: 4,
                  title: 'Fin del tratamiento',
                  duration: '6 a 10 meses',
                  description: 'Retiramos los attachments, documentamos el resultado final y entregamos las contenciones para mantener tu nueva sonrisa.',
                  img: '/Proceso /Fin Tratamiento 2.jpg',
                  position: 'object-top',
                },
              ].map(({ num, title, duration, description, img, position }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-base shadow-sm mb-5 flex-shrink-0">
                    {num}
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden mb-4 aspect-square bg-neutral-100">
                    <Image
                      src={img}
                      alt={title}
                      width={280}
                      height={280}
                      className={`w-full h-full object-cover ${position}`}
                    />
                  </div>
                  <span className="inline-block text-xs text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full font-medium mb-2">
                    {duration}
                  </span>
                  <h3 className="font-bold text-neutral-900 mb-1.5 leading-snug">{title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/pacientes/como-funciona" className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors">
                Ver proceso completo →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Evidencia */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-neutral-900 mb-2">+300 casos documentados</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Antes y después reales de pacientes tratados con STICK. Distintos casos, distintas duraciones.
              </p>
            </div>
            <Link
              href="/pacientes/antes-y-despues"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-brand-700 transition-colors text-sm"
            >
              Ver resultados →
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQ local */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              Preguntas frecuentes desde {loc.zona}
            </h2>
            <Accordion items={loc.faqs} />
          </div>
        </Container>
      </Section>

      {/* Mapa y dirección */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-neutral-900 mb-6">Dónde atendemos</h2>
            <div className="grid sm:grid-cols-2 gap-6 items-start">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">STICK Alineadores</p>
                    <p className="text-neutral-600 text-sm">Virrey del Pino 4191 3C</p>
                    <p className="text-neutral-600 text-sm">CABA, Argentina</p>
                    <p className="text-brand-600 text-sm mt-1">{loc.distance} desde {loc.zona}</p>
                  </div>
                </div>
                <a
                  href="https://share.google/xGDfh2mYnhVyN54ZZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-600 font-medium hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>

              {/* Maps embed */}
              <div className="rounded-2xl overflow-hidden aspect-video border border-neutral-200">
                <iframe
                  src="https://maps.google.com/maps?q=Virrey+del+Pino+4191,+Buenos+Aires,+Argentina&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="STICK Alineadores – Virrey del Pino 4191 3C, CABA"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA con mensaje prellenado de la zona */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title={`Empezá desde ${loc.zona}`}
            description="El primer paso es el escaneo inicial. Coordinalo en minutos por WhatsApp y en ~7 días tenés la simulación de tu tratamiento."
            context="local"
            ctaLabel={`Coordinar escaneo desde ${loc.zona}`}
            secondary={{ label: 'Ver cómo funciona', href: '/pacientes/como-funciona' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
