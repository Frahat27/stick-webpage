import type { Metadata } from 'next';
import { Montserrat, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';
import { SchemaOrg } from '@/components/layout/SchemaOrg';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stickalineadores.com.ar'),
  title: {
    default: 'STICK | Alineadores invisibles con seguimiento real',
    template: '%s | STICK Alineadores',
  },
  description:
    'STICK es el sistema de alineadores invisibles con seguimiento clínico real, rediseño incluido y resultados comprobados. Atención en CABA, zona norte.',
  keywords: [
    'alineadores invisibles',
    'ortodoncia invisible',
    'alineadores CABA',
    'alineadores Belgrano',
    'ortodoncia sin brackets',
    'STICK alineadores',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://stickalineadores.com.ar',
    siteName: 'STICK Alineadores',
    title: 'STICK | Alineadores invisibles con seguimiento real',
    description:
      'Alineadores invisibles con seguimiento clínico real, rediseño incluido y más de 300 casos documentados. Atendemos en Virrey del Pino 4191 3C, CABA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STICK Alineadores Invisibles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STICK | Alineadores invisibles con seguimiento real',
    description:
      'Alineadores invisibles con seguimiento clínico real y más de 300 casos documentados. CABA zona norte.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 antialiased">
        <SchemaOrg />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
