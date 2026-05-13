'use client';

import { useEffect } from 'react';

export default function PinkLeafLayout({ children }: { children: React.ReactNode }) {
  // Swap palette tokens by adding a class to <body> only while this page is active.
  useEffect(() => {
    document.body.classList.add('page-pinkleaf');
    return () => document.body.classList.remove('page-pinkleaf');
  }, []);
  return <>{children}</>;
}
