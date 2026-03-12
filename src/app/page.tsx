import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/ui/CTASection';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { processSteps } from '@/data/process';
import { faqsPatients } from '@/data/faqsPatients';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'STICK | Alineadores invisibles con seguimiento real',
  description:
    'STICK: alineadores invisibles con seguimiento clínico real, rediseño incluido y más de 300 casos documentados. Atendemos en Virrey del Pino 4191 3C, CABA zona norte.',
  alternates: { canonical: 'https://stickalineadores.com.ar' },
};

export default function Home() {
  const waPatient = buildWhatsAppUrl('patient');
  const shortFaqs = faqsPatients.slice(0, 5);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-600 text-white overflow-hidden">
        {/* Decoración: isotipo S grande tenue al fondo derecho */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] pointer-events-none opacity-[0.07] select-none hidden lg:block">
          <Image
            src="/icons/stick-icon-white.png"
            alt=""
            width={380}
            height={380}
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>
        {/* Decoración: círculo lima tenue en el fondo */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-lime-300/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-lime-300/10 blur-3xl pointer-events-none" />

        <Container className="relative py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: texto + CTA */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 text-balance">
                Corrige tu sonrisa sin cambiar tu estilo
              </h1>
              <p className="text-lg text-brand-100 leading-relaxed mb-8 max-w-lg">
                Alineadores invisibles con control clínico mensual y rediseño incluido cuando el tratamiento lo necesita.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
                <a
                  href={waPatient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-lime-300 text-brand-800 font-bold px-7 py-4 rounded-full text-base shadow-lg hover:bg-lime-200 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Coordinar escaneo inicial
                </a>
                <Link
                  href="/pacientes/antes-y-despues"
                  className="inline-flex items-center py-4 text-brand-200 hover:text-white text-sm font-medium transition-colors underline-offset-2 hover:underline"
                >
                  Ver casos reales →
                </Link>
              </div>

            </div>

            {/* Right: imagen */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl w-80 xl:w-96 bg-white">
                  <Image
                    src="/images/team/white-Photoroom (5).png"
                    alt="Cynthia H. – Odontóloga y fundadora de STICK Alineadores"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Badge flotante */}
                <div className="absolute -bottom-4 -left-6 bg-lime-300 rounded-xl px-4 py-2.5 shadow-lg">
                  <p className="text-brand-800 font-black text-sm">+300 casos reales</p>
                  <p className="text-brand-700 text-xs">con seguimiento clínico</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── POR QUÉ STICK ─────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Características</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              ¿Por qué elegir STICK?
            </h2>
            <p className="text-neutral-500 leading-relaxed">
              Combinamos tecnología de diagnóstico, acompañamiento clínico real y un compromiso claro con el resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Tecnología de precisión</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Usamos escaneo 3D para capturar tu dentición sin moldes ni incomodidad. El diagnóstico y diseño del tratamiento lo realiza un ortodoncista.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Comodidad y discreción</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Los alineadores son prácticamente invisibles y se adaptan a tu vida diaria. Los usás cuando querés y los retirás para comer o en ocasiones especiales.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-lime-100 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">Resultado garantizado</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Cada mes revisamos tu evolución. Si el tratamiento necesita ajustes, rediseñamos y reimprimimos sin costo adicional. El resultado es el compromiso.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── PROCESO RESUMEN ───────────────────────────────────────────────── */}
      <Section className="bg-neutral-50" id="proceso">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">El proceso</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
              Así funciona, paso a paso
            </h2>
            <p className="text-neutral-500">Transparencia desde el primer turno. Sin sorpresas ni letra chica.</p>
          </div>

          {/* Timeline horizontal */}
          <div className="relative">
            {/* Línea conectora — solo desktop */}
            <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-brand-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  num: 1,
                  title: 'Consulta inicial y escaneo',
                  duration: 'Turno ~30 min',
                  description: 'Realizamos el escaneo digital 3D de tu boca. Sin moldes ni incomodidades, en unos 15 minutos tenemos todo lo que necesitamos.',
                  img: '/proceso/Escaneo.png',
                  position: 'object-center',
                },
                {
                  num: 2,
                  title: 'Diagnóstico y diseño digital',
                  duration: '~7 días',
                  description: 'El ortodoncista analiza tu escaneo y diseña el movimiento de cada diente. En aproximadamente 7 días tenés tu simulación lista para ver.',
                  img: '/proceso/Diagnostico.png',
                  position: 'object-center',
                },
                {
                  num: 3,
                  title: 'Comienzo del tratamiento y controles mensuales',
                  duration: 'Mensual',
                  description: 'Entregamos los primeros alineadores y comenzamos los controles clínicos cada 30 días. Si hay desvíos, rediseñamos.',
                  img: '/proceso/Seguimiento.jpg',
                  position: 'object-top',
                },
                {
                  num: 4,
                  title: 'Fin del tratamiento',
                  duration: '6 a 10 meses',
                  description: 'Retiramos los attachments, documentamos el resultado final y entregamos las contenciones para mantener tu nueva sonrisa.',
                  img: '/proceso/Fin Tratamiento 2.jpg',
                  position: 'object-top',
                },
              ].map(({ num, title, duration, description, img, position }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  {/* Número */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-base shadow-sm mb-5 flex-shrink-0">
                    {num}
                  </div>

                  {/* Imagen */}
                  <div className="w-full rounded-2xl overflow-hidden mb-4 aspect-square bg-neutral-100">
                    <Image
                      src={img}
                      alt={title}
                      width={280}
                      height={280}
                      className={`w-full h-full object-cover ${position}`}
                    />
                  </div>

                  {/* Texto */}
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

      {/* ── DIFERENCIAL / CYNTHIA ─────────────────────────────────────────── */}
      <Section className="bg-brand-600 text-white relative overflow-hidden">
        {/* Isotipo decorativo fondo */}
        <div className="absolute -left-20 -bottom-20 w-72 h-72 pointer-events-none opacity-[0.06] select-none hidden lg:block" aria-hidden="true">
          <Image src="/icons/isotipo-lima.png" alt="" width={288} height={288} className="w-full h-full object-contain" />
        </div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lime-300 text-sm font-semibold tracking-widest uppercase mb-4">Lo que nos diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                El seguimiento real hace la diferencia
              </h2>
              <blockquote className="border-l-4 border-lime-300 pl-4 mb-6">
                <p className="text-brand-100 text-lg leading-relaxed italic">
                  "Creo en tratamientos reales, sin dolor y con resultados visibles."
                </p>
                <footer className="text-brand-300 text-sm mt-2">— Cynthia H., odontóloga y fundadora de STICK</footer>
              </blockquote>
              <p className="text-brand-200 leading-relaxed mb-8">
                Por eso hacemos controles mensuales reales. Si detectamos que los dientes no están evolucionando como se planificó, rediseñamos. Sin costos adicionales, sin burocracia. Está incluido desde el principio porque es parte del proceso.
              </p>
              <a
                href={waPatient}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-300 text-brand-800 font-bold px-6 py-3.5 rounded-full hover:bg-lime-200 transition-colors"
              >
                Coordinar escaneo inicial
              </a>
            </div>
            {/* Doctor photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden w-72 sm:w-80">
                  <Image
                    src="/images/team/white-Photoroom (5).png"
                    alt="Cynthia H. – Odontóloga y fundadora de STICK Alineadores"
                    width={320}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-lime-300 rounded-xl px-4 py-2 shadow-md">
                  <p className="text-brand-800 font-black text-sm">Cynthia H.</p>
                  <p className="text-brand-700 text-xs">Odontóloga · Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── ANTES Y DESPUÉS ───────────────────────────────────────────────── */}
      <Section className="bg-white" id="resultados">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Resultados</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">Más de 300 casos reales</h2>
            <p className="text-neutral-600">Casos documentados con fotos de antes y después. Resultados que hablan por sí solos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { src: '/images/before-after/1.png', label: 'Apiñamiento frontal', duration: '8 meses' },
              { src: '/images/before-after/2.png', label: 'Apiñamiento inferior', duration: '6 meses' },
              { src: '/images/before-after/Facundo Dyzel - AyD.png', label: 'Corrección total', duration: '7 meses' },
            ].map((c) => (
              <div key={c.src} className="rounded-2xl overflow-hidden border border-neutral-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                <Image
                  src={c.src}
                  alt={`Antes y después – ${c.label}`}
                  width={400}
                  height={480}
                  className="w-full h-auto object-cover"
                />
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700">{c.label}</span>
                  <span className="text-xs bg-brand-50 text-brand-600 border border-brand-100 px-2 py-0.5 rounded-full">{c.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pacientes/antes-y-despues" className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-700 transition-colors">
              Ver todos los casos
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── TESTIMONIOS ───────────────────────────────────────────────────── */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Lo que dicen nuestros pacientes</p>
            <h2 className="text-3xl font-bold text-neutral-900">Testimonios reales</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-4xl mx-auto">

            {/* Panel izquierdo — resumen Google */}
            <div className="flex-shrink-0 bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm flex flex-col items-center text-center w-full lg:w-56 justify-between">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                <Image
                  src="/icons/sello-circular-azul.png"
                  alt="STICK Alineadores"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-neutral-900 text-sm mb-0.5">STICK Alineadores</p>
              <p className="text-neutral-400 text-xs mb-3">Belgrano, CABA</p>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-2xl font-black text-neutral-900">5.0</span>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-neutral-400 mb-1">Basado en reseñas de pacientes</p>
              <p className="text-xs text-neutral-400 mb-5">
                powered by{' '}
                <span className="font-semibold">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </p>
              <a
                href="https://g.page/r/STICK-alineadores/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors w-full justify-center"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.82 8.18l-1.64 7.639C16.027 16.521 15.401 17 14.667 17c-.337 0-.662-.096-.94-.278l-2.405-1.589-1.159 1.116c-.129.124-.302.193-.482.193l.172-2.438 4.436-4.005c.193-.172-.042-.268-.298-.096L6.2 14.408l-2.36-.738c-.512-.16-.522-.512.107-.757l10.327-3.982c.427-.155.801.104.663.757-.001-.003-.003-.008-.003-.008l.886-1.5z"/>
                </svg>
                Dejá tu reseña
              </a>
            </div>

            {/* Carrusel de reseñas */}
            <TestimonialsCarousel />

          </div>
        </Container>
      </Section>

      {/* ── DÓNDE ESTAMOS ─────────────────────────────────────────────────── */}
      <Section className="bg-white" id="zonas">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Dónde atendemos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Dónde estamos</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">

            {/* Panel izquierdo — info de contacto */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-7 flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">Información de contacto</h3>
                <p className="text-neutral-500 text-sm">Estamos para atenderte y responder tus consultas.</p>
              </div>

              <div className="space-y-4">
                {/* Dirección */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Dirección</p>
                    <p className="text-sm text-neutral-500">Virrey del Pino 4191, 3C, Belgrano, CABA</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">WhatsApp</p>
                    <p className="text-sm text-neutral-500">Coordiná por mensaje directo</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">Horario de atención</p>
                    <p className="text-sm text-neutral-500">Lunes a viernes: 9:00 – 19:00</p>
                    <p className="text-sm text-neutral-500">Sábados: 9:00 – 13:00</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={waPatient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribinos
                </a>
                <a
                  href="https://maps.google.com/?q=Virrey+del+Pino+4191+Belgrano+CABA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-neutral-200 hover:border-brand-400 text-neutral-700 hover:text-brand-700 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Cómo llegar
                </a>
              </div>

              {/* Zonas */}
              <div>
                <p className="text-xs font-semibold text-neutral-400 tracking-widest uppercase mb-3">Atendemos pacientes de</p>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/alineadores-invisibles-${loc.slug}`}
                      className="text-xs text-neutral-600 hover:text-brand-700 bg-neutral-100 hover:bg-brand-50 border border-neutral-200 hover:border-brand-200 px-3 py-1 rounded-full transition-all"
                    >
                      {loc.zona}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel derecho — mapa */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 min-h-[420px]">
              <iframe
                src="https://maps.google.com/maps?q=Virrey+del+Pino+4191+Belgrano+Buenos+Aires&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación STICK Alineadores"
              />
            </div>

          </div>
        </Container>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">Preguntas frecuentes</p>
              <h2 className="text-3xl font-bold text-neutral-900">Las preguntas más comunes</h2>
            </div>
            <Accordion items={shortFaqs} />
            <div className="mt-6 text-center">
              <Link href="/pacientes/preguntas-frecuentes" className="text-brand-600 text-sm font-semibold hover:underline">
                Ver todas las preguntas →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <CTASection
            title="Empezá hoy, sin compromiso"
            description="El primer paso es el escaneo inicial. Sin moldes, sin dolor, sin letra chica. Coordinalo en minutos por WhatsApp."
            context="patient"
            ctaLabel="Coordinar escaneo inicial"
            secondary={{ label: 'Ver resultados primero', href: '/pacientes/antes-y-despues' }}
            className="max-w-4xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
