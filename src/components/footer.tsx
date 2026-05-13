import Link from 'next/link';
import { LeafMark } from './leaf-mark';

const links = [
  { href: '/', label: 'Home' },
  { href: '/stay', label: 'Stay' },
  { href: '/adventures', label: 'Adventures' },
  { href: '/dine', label: 'Dine' },
  { href: '/pink-leaf', label: 'Pink Leaf Café' },
  { href: '/gallery', label: 'Gallery' },
];

export function Footer() {
  return (
    <footer className="bg-forest text-bg pt-20 pb-10 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-14 pb-16 border-b border-bg/15">
          <div>
            <div className="flex items-baseline gap-3">
              <LeafMark size={22} />
              <div className="display text-[36px] tracking-[0.08em]">AARANY</div>
            </div>
            <p className="italic-display text-[22px] mt-2 opacity-80">Serenity, that you deserve.</p>
            <p className="text-sm opacity-60 max-w-[380px] mt-[22px] leading-[1.6]">
              A small jungle resort in the Satpura foothills, an hour and fifteen minutes from Bhopal.
              Three pool villas, one restaurant, one café, twelve acres of forest.
            </p>
          </div>

          <div>
            <div className="eyebrow text-bg/50">Visit</div>
            <ul className="list-none p-0 mt-5 flex flex-col gap-2.5 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="opacity-80 no-underline text-bg hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-bg/50">Find us</div>
            <p className="text-sm mt-5 opacity-80 leading-[1.7]">
              Aarany Jungle Resort<br />
              Off Ratapani Road<br />
              Bhopal · Madhya Pradesh<br />
              462030
            </p>
          </div>

          <div>
            <div className="eyebrow text-bg/50">In touch</div>
            <p className="text-sm mt-5 opacity-80 leading-[1.7]">
              <span className="opacity-60">Front desk · </span>+91 9 8765 43210<br />
              <span className="opacity-60">Reservations · </span>stay@aarany.in<br />
              <span className="opacity-60">Pink Leaf · </span>hello@pinkleaf.cafe
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <div className="mono opacity-50 text-[10px]">
            © 2026 AARANY JUNGLE RESORT · ALL TREES UNDISTURBED
          </div>
          <div className="mono opacity-50 text-[10px] flex gap-6">
            <span>INSTAGRAM</span><span>JOURNAL</span><span>PRIVACY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
