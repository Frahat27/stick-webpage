'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

// ─── Nav data ──────────────────────────────────────────────────────────────────

const navItems = [
  {
    label: '¿Cómo funcionan?',
    items: [
      { label: '¿Cómo es el proceso?', href: '/pacientes/como-funciona', desc: 'Del escaneo a la sonrisa final' },
      { label: '¿Sos Apto?',           href: '/pacientes/sos-apto',      desc: 'Evaluá si sos candidato/a' },
      { label: '¿Cómo se producen?',   href: '/pacientes/como-se-producen', desc: 'Tecnología y materiales' },
    ],
  },
  {
    label: '¿Por qué usarlos?',
    items: [
      { label: 'Ventajas vs Brackets', href: '/pacientes/alineadores-vs-brackets', desc: 'Comparativa honesta' },
      { label: 'STICK vs otros',       href: '/pacientes/stick-vs-otros',          desc: 'Qué nos hace distintos' },
      { label: 'Precios',              href: '/pacientes/precios',                 desc: 'Claro y sin letra chica' },
    ],
  },
  {
    label: '¿Quiénes somos?',
    href: '/quienes-somos',
  },
  {
    label: 'Contáctanos',
    items: [
      { label: 'WhatsApp',          href: '__WA__',  icon: 'whatsapp',  external: true },
      { label: 'Instagram',         href: 'https://instagram.com/stickalineadores', icon: 'instagram', external: true },
      { label: 'Déjanos un mensaje', href: '__WA__', icon: 'message', external: true },
    ],
  },
];

// ─── Dropdown component ────────────────────────────────────────────────────────

function NavDropdown({ item }: { item: typeof navItems[0] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const waUrl = buildWhatsAppUrl('general');

  function enter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }
  function leave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }

  if (!item.items) {
    return (
      <Link
        href={item.href!}
        className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors rounded-lg hover:bg-brand-50"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors rounded-lg hover:bg-brand-50"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-fade-in">
          {/* pequeño triángulo decorativo */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-neutral-100 rotate-45" />

          {item.items.map((sub) => {
            const href = sub.href === '__WA__' ? waUrl : sub.href;
            const isExternal = 'external' in sub && sub.external;
            const content = (
              <div className="flex items-start gap-3 px-4 py-3 hover:bg-brand-50 cursor-pointer group transition-colors">
                {'icon' in sub && sub.icon && (
                  <span className="mt-0.5 flex-shrink-0 text-brand-400 group-hover:text-brand-600">
                    <ContactIcon name={sub.icon} />
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium text-neutral-800 group-hover:text-brand-700">{sub.label}</p>
                  {'desc' in sub && sub.desc && (
                    <p className="text-xs text-neutral-400 mt-0.5">{sub.desc}</p>
                  )}
                </div>
              </div>
            );
            return isExternal ? (
              <a key={sub.label} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
              <Link key={sub.label} href={href}>{content}</Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Contact icons ─────────────────────────────────────────────────────────────

function ContactIcon({ name }: { name: string }) {
  if (name === 'whatsapp') return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
  if (name === 'instagram') return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
  // message
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

// ─── Mobile accordion item ─────────────────────────────────────────────────────

function MobileNavItem({
  item,
  onClose,
  waUrl,
}: {
  item: typeof navItems[0];
  onClose: () => void;
  waUrl: string;
}) {
  const [open, setOpen] = useState(false);

  if (!item.items) {
    return (
      <Link
        href={item.href!}
        onClick={onClose}
        className="block px-4 py-3 text-base font-medium text-neutral-800 hover:text-brand-600 border-b border-neutral-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-neutral-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-neutral-800"
      >
        {item.label}
        <svg className={`w-4 h-4 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="bg-neutral-50 pb-2">
          {item.items.map((sub) => {
            const href = sub.href === '__WA__' ? waUrl : sub.href;
            const isExternal = 'external' in sub && sub.external;
            const content = (
              <span className="block px-6 py-2.5 text-sm text-neutral-700 hover:text-brand-600">
                {sub.label}
              </span>
            );
            return isExternal ? (
              <a key={sub.label} href={href} target="_blank" rel="noopener noreferrer" onClick={onClose}>{content}</a>
            ) : (
              <Link key={sub.label} href={href} onClick={onClose}>{content}</Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Header ───────────────────────────────────────────────────────────────

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const waUrl = buildWhatsAppUrl('patient');
  const waOrtho = buildWhatsAppUrl('orthodontist');
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Cerrar menú mobile al apretar Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeMenu();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeMenu]);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px] gap-4">

            {/* ── Logo ─────────────────────────────────────────── */}
            <Link href="/" aria-label="STICK Alineadores – Inicio" className="flex-shrink-0">
              <Image
                src="/icons/stick-logo-blue.png"
                alt="STICK Alineadores Invisibles"
                width={200}
                height={80}
                priority
                className="h-14 sm:h-16 w-auto"
              />
            </Link>

            {/* ── Nav desktop ──────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
              {navItems.map((item) => (
                <NavDropdown key={item.label} item={item} />
              ))}
            </nav>

            {/* ── CTAs desktop ─────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {/* ¿Soy candidato? — Lima STICK */}
              <Link
                href="/pacientes/sos-apto"
                className="inline-flex items-center px-4 py-2 rounded-full bg-lime-300 text-brand-800 text-xs font-black uppercase tracking-wide hover:bg-lime-200 transition-colors whitespace-nowrap"
              >
                ¿Soy candidato?
              </Link>

              {/* Soy Ortodoncista — Azul claro STICK */}
              <Link
                href="/ortodoncistas"
                className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-xs font-black uppercase tracking-wide hover:bg-brand-200 transition-colors whitespace-nowrap"
              >
                Soy Ortodoncista
              </Link>

              {/* WhatsAppeame — Sólido verde WA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-black uppercase tracking-wide hover:bg-green-400 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsAppeame
              </a>
            </div>

            {/* ── Hamburger mobile ─────────────────────────────── */}
            <button
              className="lg:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div className="fixed top-[80px] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto lg:hidden">
            <nav aria-label="Menú móvil">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} onClose={closeMenu} waUrl={buildWhatsAppUrl('general')} />
              ))}
            </nav>

            {/* CTAs mobile */}
            <div className="p-4 flex flex-col gap-3 border-t border-neutral-100 mt-2">
              <Link
                href="/pacientes/sos-apto"
                onClick={closeMenu}
                className="flex items-center justify-center py-3.5 rounded-full bg-lime-300 text-brand-800 font-black text-sm uppercase tracking-wide"
              >
                ¿Soy candidato?
              </Link>
              <Link
                href="/ortodoncistas"
                onClick={closeMenu}
                className="flex items-center justify-center py-3.5 rounded-full bg-brand-100 text-brand-700 font-black text-sm uppercase tracking-wide"
              >
                Soy Ortodoncista
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-green-500 text-white font-black text-sm uppercase tracking-wide"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsAppeame
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
