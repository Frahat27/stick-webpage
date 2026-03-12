import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/ui/CTASection';
import { faqsOrtho } from '@/data/faqsOrtho';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes para ortodoncistas | STICK Alineadores',
  description:
    'Respuestas a las preguntas más comunes de los profesionales sobre el modelo de trabajo, tecnología y colaboración con STICK.',
  alternates: { canonical: 'https://stickalineadores.com.ar/ortodoncistas/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqsOrtho.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function OrthoFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-brand-950 text-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-2">Para profesionales</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">Preguntas frecuentes</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Las dudas más comunes de los profesionales antes de empezar a trabajar con STICK.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqsOrtho} />
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-50">
        <Container>
          <CTASection
            title="¿Tenés más preguntas?"
            description="Escribinos por WhatsApp o completá el formulario de contacto. Te respondemos rápido."
            context="orthodontist"
            ctaLabel="Consultar por WhatsApp"
            secondary={{ label: 'Ir al formulario', href: '/ortodoncistas/contacto' }}
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
