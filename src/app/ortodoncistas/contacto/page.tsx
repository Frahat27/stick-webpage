import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import OrthoContactForm from './OrthoContactForm';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contacto para ortodoncistas | STICK Alineadores',
  description:
    'Completá el formulario o escribinos por WhatsApp para trabajar con STICK. Coordinamos una reunión y te explicamos todo.',
};

export default function ContactoOrtodoncistasPage() {
  const waUrl = buildWhatsAppUrl('orthodontist');

  return (
    <>
      <section className="bg-brand-950 text-white pt-12 pb-8">
        <Container>
          <div className="max-w-2xl">
            <p className="text-brand-300 text-sm font-semibold tracking-widest uppercase mb-2">Contacto</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">Trabajá con STICK</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Completá el formulario o escribinos directamente por WhatsApp. Coordinamos una reunión sin compromiso.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Formulario de contacto</h2>
              <OrthoContactForm />
            </div>

            {/* WhatsApp alt */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-bold text-neutral-900 mb-3">¿Preferís WhatsApp?</h2>
                <p className="text-neutral-600 text-sm mb-5 leading-relaxed">
                  Si preferís un canal más directo, escribinos por WhatsApp. Respondemos en horario de atención y coordinamos todo por ahí.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full transition-colors w-full justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </a>

                <div className="mt-6 pt-5 border-t border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-2">Dirección</h3>
                  <p className="text-sm text-neutral-500">Virrey del Pino 4191 3C<br />CABA, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
