'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function Nav() {
  const pathname = usePathname() || '/';
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ color: 'var(--moss)', flexShrink: 0 }}>
            <path d="M3 21 C3 12 9 4 21 3 C20 14 13 20 3 21 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M3 21 C9 16 14 11 21 3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div>
            <div className="brand-mark">AARANY</div>
            <div className="brand-sub">Jungle Resort &amp; Adventure</div>
          </div>
        </Link>

        <div className="nav-links">
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

        <Link href="/stay" className="nav-cta">Reserve</Link>
      </div>
    </nav>
  );
}
