'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Hide bar when navigation completes
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  // Show bar immediately on any internal link click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;
      if (href === pathname || href === window.location.pathname) return;
      setLoading(true);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  if (!loading) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          zIndex: 9999,
          background: 'hsl(113 16% 20% / 0.12)',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'hsl(113 16% 20%)',
            animation: 'nav-progress 1.4s ease-in-out infinite',
            transformOrigin: 'left center',
          }}
        />
      </div>
      <style>{`
        @keyframes nav-progress {
          0%   { transform: scaleX(0);   opacity: 1; }
          65%  { transform: scaleX(0.8); opacity: 1; }
          100% { transform: scaleX(1);   opacity: 0; }
        }
      `}</style>
    </>
  );
}
