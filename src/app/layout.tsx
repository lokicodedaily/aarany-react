import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono, Caveat } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { NavigationProgress } from '@/components/navigation-progress';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const hand = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AARANY · Jungle Resort & Adventure',
  description:
    'A small jungle retreat in the Satpura foothills, Madhya Pradesh. Three pool villas, a slow restaurant, and a garden café called Pink Leaf.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'AARANY · Jungle Resort & Adventure',
    description:
      'A small jungle retreat in the Satpura foothills, Madhya Pradesh. Three pool villas, a slow restaurant, and a garden café called Pink Leaf.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${hand.variable}`}
    >
      <body>
        <NavigationProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
