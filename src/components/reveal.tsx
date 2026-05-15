'use client';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type State = 'initial' | 'hidden' | 'visible';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>('initial');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in viewport on load — let the page transition handle it, skip reveal
    if (el.getBoundingClientRect().top < window.innerHeight - 40) {
      setState('initial');
      return;
    }

    // Below the fold — hide and watch for scroll
    setState('hidden');

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        state === 'hidden' && 'opacity-0',
        state === 'visible' && 'animate-fade-in',
        className
      )}
      style={state === 'visible' && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
