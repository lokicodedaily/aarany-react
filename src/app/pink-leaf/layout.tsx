'use client';

import { useEffect } from 'react';

// Swaps the page palette to the pink-leaf variant by toggling a body class.
// Done in a layout (not the page itself) so the class persists across nested
// route segments and isn't briefly removed during streaming.
export default function PinkLeafLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('page-pinkleaf');
    return () => document.body.classList.remove('page-pinkleaf');
  }, []);
  return <>{children}</>;
}
