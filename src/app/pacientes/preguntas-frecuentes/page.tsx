import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/ui/CTASection';
import { faqsPatients } from '@/data/faqsPatients';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre alineadores invisibles | STICK',
  description:
    'Respuestas claras y honestas a las preguntas más frecuentes sobre el tratamiento de alineadores invisibles STICK: duración, uso, precios, seguimiento y más.',
  alternates: { canonical: 'https://stickalineadores.com.ar/pacientes/preguntas-frecuentes' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqsPatients.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-600 text-sm font-semibold tracking-widest uppercase mb-2">FAQ</p>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 mb-4 leading-tight">
              Preguntas frecuentes
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Todo lo que los pacientes preguntan antes de empezar. Sin respuestas evasivas.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqsPatients} />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-neutral-50">
        <Container>
          <CTASection
            title="¿No encontrás tu pregunta?"
            description="Escribinos por WhatsApp. Respondemos rápido y sin presión."
            context="patient"
            ctaLabel="Consultar por WhatsApp"
            className="max-w-3xl mx-auto"
          />
        </Container>
      </Section>
    </>
  );
}
