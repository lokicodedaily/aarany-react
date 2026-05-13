import type { Metadata } from 'next';
import '@/styles/global.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body>
        <Nav />
        <main className="page-fade">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
