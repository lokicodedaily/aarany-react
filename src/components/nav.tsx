'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeOff, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => { setMenuOpen(false); setMenuClosing(false); }, 320);
  };

  // Close menu on route change
  useEffect(() => { closeMenu(); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

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
    <>
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

          {/* Desktop links */}
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

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              aria-label={playing ? 'Mute ambient sound' : 'Play ambient sound'}
              className="p-2 text-ink-mute hover:text-ink transition-colors"
            >
              {playing ? <Volume2 size={16} /> : <VolumeOff size={16} />}
            </button>

            <Button variant="nav" size="sm" asChild className="hidden md:inline-flex">
              <a href="https://www.makemytrip.com/hotels/aarany_jungle_resort_and_adventure-details-sonkach.html" target="_blank" rel="noopener noreferrer">Plan a Stay</a>
            </Button>

            {/* Leaf → × toggle — mobile only */}
            <button
              onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden relative w-9 h-9 flex items-center justify-center"
            >
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}>
                <LeafMark size={22} className="text-ink" />
              </span>
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
                <X size={20} className="text-ink" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {(menuOpen || menuClosing) && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{
            background: 'hsl(120 25% 13%)',
            top: '68px',
            transformOrigin: 'top right',
            animation: `${menuClosing ? 'menu-exit' : 'menu-enter'} 320ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
        >
          <div className="flex flex-col flex-1 container py-10">
            <nav className="flex flex-col gap-1 flex-1">
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href, pathname) ? 'page' : undefined}
                  className="flex items-baseline justify-between py-5 border-b border-bg/10 group"
                  style={menuClosing ? { opacity: 1 } : {
                    animationName: 'menu-link-in',
                    animationDuration: '320ms',
                    animationTimingFunction: 'ease',
                    animationFillMode: 'forwards',
                    animationDelay: `${i * 45}ms`,
                    opacity: 0,
                  }}
                >
                  <span
                    className="font-serif text-[clamp(32px,8vw,48px)] font-light text-bg leading-none group-hover:text-sand transition-colors"
                  >
                    {l.label}
                  </span>
                  <span className="font-mono text-[10px] text-bg/30 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="pt-8 pb-4 flex flex-col gap-4">
              <a
                href="https://www.makemytrip.com/hotels/aarany_jungle_resort_and_adventure-details-sonkach.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-mono text-[11px] tracking-[0.16em] uppercase py-4 rounded-full border border-bg/40 text-bg hover:bg-bg/10 transition-colors"
              >
                Plan a Stay →
              </a>
              <p className="mono text-bg/30 text-[10px] text-center tracking-widest">
                AARANY · SATPURA FOOTHILLS · MP
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
