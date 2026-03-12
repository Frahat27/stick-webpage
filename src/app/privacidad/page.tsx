import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de privacidad | STICK Alineadores',
  description: 'Política de privacidad de STICK Alineadores.',
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto prose prose-neutral">
          <h1>Política de privacidad</h1>
          <p className="text-neutral-500 text-sm">Última actualización: enero 2025</p>

          <h2>1. Información que recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionás directamente al completar el formulario de contacto para ortodoncistas (nombre, clínica, barrio, matrícula, teléfono, email y mensaje) o cuando nos escribís por WhatsApp.
          </p>

          <h2>2. Cómo usamos tu información</h2>
          <p>
            Usamos la información recopilada exclusivamente para responder a tu consulta y coordinar el contacto pertinente. No vendemos ni compartimos tu información con terceros.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Este sitio puede usar cookies técnicas necesarias para el funcionamiento. No usamos cookies de seguimiento de terceros ni publicidad personalizada.
          </p>

          <h2>4. Seguridad</h2>
          <p>
            Tomamos medidas razonables para proteger la información que nos compartís. Sin embargo, ningún método de transmisión por internet es 100% seguro.
          </p>

          <h2>5. Contacto</h2>
          <p>
            Para cualquier consulta sobre esta política, podés escribirnos por WhatsApp o por el formulario de contacto en la sección de ortodoncistas.
          </p>
        </div>
      </Container>
    </section>
  );
}
