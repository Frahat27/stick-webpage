import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Términos y condiciones | STICK Alineadores',
  description: 'Términos y condiciones de uso del sitio web de STICK Alineadores.',
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto prose prose-neutral">
          <h1>Términos y condiciones</h1>
          <p className="text-neutral-500 text-sm">Última actualización: enero 2025</p>

          <h2>1. Uso del sitio</h2>
          <p>
            Este sitio web es de carácter informativo. La información contenida no constituye diagnóstico médico ni reemplaza la consulta con un profesional de la salud bucal.
          </p>

          <h2>2. Contenido informativo</h2>
          <p>
            Todo el contenido del sitio (artículos, casos, descripciones de proceso) tiene fines informativos generales. Los resultados individuales varían según el diagnóstico y las características de cada caso.
          </p>

          <h2>3. Propiedad intelectual</h2>
          <p>
            El contenido, diseño y marca STICK son propiedad de sus titulares. Queda prohibida la reproducción sin autorización expresa.
          </p>

          <h2>4. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página.
          </p>

          <h2>5. Contacto</h2>
          <p>
            Para consultas relacionadas con estos términos, contactanos por WhatsApp o a través del formulario de la sección de ortodoncistas.
          </p>
        </div>
      </Container>
    </section>
  );
}
