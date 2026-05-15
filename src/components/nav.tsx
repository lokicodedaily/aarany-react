'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeOff } from 'lucide-react';
import { LeafMark } from './leaf-mark';
import { Button } from './ui/button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/stay', label: 'Stay' },
  { href: '/adventures', label: 'Adventures' },
  { href: '/dine', label: 'Dine' },
  { href: '/pink-leaf', label: 'Pink Leaf' },
  { href: '/gallery', label: 'Gallery' },
];

function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function Nav() {
  const pathname = usePathname() ?? '/';
  const [scrolled, setScrolled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Start playing on first user interaction with the page
    const onFirstInteraction = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      document.removeEventListener('click', onFirstInteraction);
    };
    document.addEventListener('click', onFirstInteraction);

    return () => {
      audio.pause();
      document.removeEventListener('click', onFirstInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <nav className={scrolled ? 'nav-shell nav-scrolled' : 'nav-shell'}>
      <div className="container flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-baseline gap-2.5 no-underline">
          <LeafMark size={20} className="text-moss shrink-0 self-center" />
          <div>
            <div className="font-serif text-[22px] tracking-[0.12em] font-medium leading-none">AARANY</div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-ink-mute uppercase mt-1">
              Jungle Resort &amp; Adventure
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={isActive(l.href, pathname) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleSound}
          aria-label={playing ? 'Mute ambient sound' : 'Play ambient sound'}
          className="p-2 text-ink-mute hover:text-ink transition-colors"
        >
          {playing ? <Volume2 size={16} /> : <VolumeOff size={16} />}
        </button>

        <Button variant="nav" size="sm" asChild>
          <a href="https://www.makemytrip.com/hotels/aarany_jungle_resort_and_adventure-details-sonkach.html" target="_blank" rel="noopener noreferrer">Plan a Stay</a>
        </Button>
      </div>
    </nav>
  );
}
