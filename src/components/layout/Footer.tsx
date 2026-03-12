import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const patientLinks = [
  { label: 'Cómo funciona', href: '/pacientes/como-funciona' },
  { label: 'Antes y después', href: '/pacientes/antes-y-despues' },
  { label: 'Precios', href: '/pacientes/precios' },
  { label: 'Preguntas frecuentes', href: '/pacientes/preguntas-frecuentes' },
  { label: 'Alineadores vs brackets', href: '/pacientes/alineadores-vs-brackets' },
];

const orthoLinks = [
  { label: 'Cómo trabajamos', href: '/ortodoncistas/como-trabajamos' },
  { label: 'Beneficios', href: '/ortodoncistas/beneficios' },
  { label: 'FAQ para profesionales', href: '/ortodoncistas/faq' },
  { label: 'Contacto', href: '/ortodoncistas/contacto' },
];


export default function Footer() {
  const waUrl = buildWhatsAppUrl('general');

  return (
    <footer className="bg-brand-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="STICK Alineadores – Inicio">
              <Image
                src="/icons/stick-logo-white.png"
                alt="STICK Alineadores Invisibles"
                width={180}
                height={72}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-lime-300/80 text-xs font-semibold tracking-widest uppercase mb-3 font-display">
              Corrige tu sonrisa sin cambiar tu estilo
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-5">
              Alineadores invisibles con seguimiento clínico real, rediseño incluido y resultados comprobados.
            </p>
            <p className="text-xs text-neutral-500">
              Virrey del Pino 4191 3C<br />
              CABA, Argentina
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors w-fit"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar ahora
              </a>
              <a
                href="https://instagram.com/stick_alineadores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-lime-300 text-sm transition-colors w-fit"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
                @stick_alineadores
              </a>
            </div>
          </div>

          {/* Pacientes */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Pacientes</h3>
            <ul className="space-y-2.5">
              {patientLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-lime-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ortodoncistas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ortodoncistas</h3>
            <ul className="space-y-2.5">
              {orthoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-lime-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Zonas</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/alineadores-invisibles-belgrano" className="text-sm text-neutral-400 hover:text-lime-300 transition-colors">
                  Belgrano
                </Link>
              </li>
              {['Núñez', 'Saavedra', 'Palermo', 'Vicente López', 'Olivos', 'San Isidro'].map((zona) => (
                <li key={zona}>
                  <span className="text-sm text-neutral-400">{zona}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sello circular de marca */}
        <div className="mt-12 flex justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden opacity-60 hover:opacity-90 transition-opacity">
            <Image
              src="/icons/sello-circular-azul.png"
              alt="STICK Alineadores Invisibles – Sello de marca"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-brand-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} STICK Alineadores. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
