'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const reviews = [
  {
    name: 'Valentina R.',
    initials: 'VR',
    time: 'Hace 2 meses',
    text: 'Terminé mi tratamiento en 7 meses y el seguimiento fue impecable. En el mes 4 me rediseñaron parte del plan y el resultado fue mucho mejor.',
  },
  {
    name: 'Lucía M.',
    initials: 'LM',
    time: 'Hace 3 meses',
    text: 'Lo que más me gustó fue la transparencia del proceso. Desde el primer turno me explicaron todo y pude ver la simulación antes de empezar.',
  },
  {
    name: 'Carolina F.',
    initials: 'CF',
    time: 'Hace 4 meses',
    text: 'Siempre tuve miedo de los brackets. Los alineadores STICK fueron la solución perfecta: nadie se daba cuenta y el resultado fue increíble.',
  },
];

const PER_PAGE = 3;
const totalPages = Math.ceil(reviews.length / PER_PAGE);

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visible = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = useCallback(() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1)), []);
  const next = useCallback(() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1)), []);

  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);

  return (
    <div
      className="flex-1 flex flex-col min-h-0"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* 3 cards — stretch to fill height */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {visible.map((t) => (
          <div key={t.name} className="bg-white border border-neutral-100 rounded-2xl p-5 shadow-sm flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-700 font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 leading-none mb-0.5">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.time}</p>
                </div>
              </div>
              <GoogleIcon />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>

            {/* Text — fills remaining space */}
            <p className="text-neutral-600 text-sm leading-relaxed flex-1">{t.text}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page ? 'bg-brand-600 w-5' : 'bg-neutral-300 w-2'
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center transition-colors"
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
