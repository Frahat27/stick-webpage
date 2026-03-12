'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              'rounded-xl border transition-colors duration-200',
              isOpen
                ? 'border-brand-200 bg-brand-50/60'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
            )}
          >
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={cn(
                'font-semibold text-sm sm:text-base leading-snug transition-colors',
                isOpen ? 'text-brand-700' : 'text-neutral-900'
              )}>
                {item.question}
              </span>
              <span className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200',
                isOpen ? 'bg-brand-600 text-white' : 'bg-neutral-100 text-neutral-500'
              )}>
                <svg
                  className={cn('w-3.5 h-3.5 transition-transform duration-200', isOpen ? 'rotate-180' : '')}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 border-t border-brand-100 pt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
