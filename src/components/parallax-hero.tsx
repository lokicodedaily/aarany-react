'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function ParallaxHero({ src, blurDataURL, alt }: {
  src: string;
  blurDataURL: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', top: '-10%', left: 0, right: 0, height: '120%', willChange: 'transform' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
