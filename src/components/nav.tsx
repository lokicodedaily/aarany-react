'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  return (
    <nav className="nav-shell">
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

        <Button variant="nav" size="sm" asChild>
          <Link href="/stay">Reserve</Link>
        </Button>
      </div>
    </nav>
  );
}
