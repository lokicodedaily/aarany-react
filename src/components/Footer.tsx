import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/stay', label: 'Stay' },
  { href: '/adventures', label: 'Adventures' },
  { href: '/dine', label: 'Dine' },
  { href: '/pink-leaf', label: 'Pink Leaf Café' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap: 56,
            paddingBottom: 64,
            borderBottom: '1px solid rgba(246,241,231,0.15)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 21 C3 12 9 4 21 3 C20 14 13 20 3 21 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path d="M3 21 C9 16 14 11 21 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <div className="display" style={{ fontSize: 36, letterSpacing: '0.08em' }}>AARANY</div>
            </div>
            <p className="italic" style={{ fontSize: 22, marginTop: 8, opacity: 0.8 }}>
              Serenity, that you deserve.
            </p>
            <p style={{ fontSize: 14, opacity: 0.6, maxWidth: 380, marginTop: 22, lineHeight: 1.6 }}>
              A small jungle resort in the Satpura foothills, an hour and fifteen minutes from Bhopal.
              Three pool villas, one restaurant, one café, twelve acres of forest.
            </p>
          </div>

          <div>
            <div className="eyebrow">Visit</div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '20px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontSize: 14,
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ opacity: 0.8, textDecoration: 'none', color: 'inherit' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">Find us</div>
            <p style={{ fontSize: 14, marginTop: 20, opacity: 0.8, lineHeight: 1.7 }}>
              Aarany Jungle Resort<br />
              Off Ratapani Road<br />
              Bhopal · Madhya Pradesh<br />
              462030
            </p>
          </div>

          <div>
            <div className="eyebrow">In touch</div>
            <p style={{ fontSize: 14, marginTop: 20, opacity: 0.8, lineHeight: 1.7 }}>
              <span style={{ opacity: 0.6 }}>Front desk · </span>+91 9 8765 43210<br />
              <span style={{ opacity: 0.6 }}>Reservations · </span>stay@aarany.in<br />
              <span style={{ opacity: 0.6 }}>Pink Leaf · </span>hello@pinkleaf.cafe
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '32px 0 0',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div className="mono" style={{ opacity: 0.5, fontSize: 10 }}>
            © 2026 AARANY JUNGLE RESORT · ALL TREES UNDISTURBED
          </div>
          <div className="mono" style={{ opacity: 0.5, fontSize: 10, display: 'flex', gap: 24 }}>
            <span>INSTAGRAM</span><span>JOURNAL</span><span>PRIVACY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
