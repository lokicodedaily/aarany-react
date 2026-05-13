import Link from 'next/link';
import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackTestimonial } from '@/lib/data';

export const metadata: Metadata = {
  title: 'AARANY · Jungle Resort & Adventure · Bhopal, Madhya Pradesh',
};

const stats = [
  { k: '12', v: 'Acres of Forest' },
  { k: '03', v: 'Pool Villas' },
  { k: '24°', v: 'Avg. Temp' },
  { k: '—', v: 'Bhopal · 38 km' },
];

const highlights = [
  { num: '01', title: 'Three pool villas', body: 'Each villa has a private plunge pool, an outdoor shower, and a daybed under a mahua tree.' },
  { num: '02', title: 'Jungle safari', body: 'Open-jeep morning safaris into Ratapani — leopard country, sloth bear, painted spurfowl.' },
  { num: '03', title: 'Trekking', body: 'Six guided trails on the property and four off it, from a 40-minute stroll to a half-day climb.' },
  { num: '04', title: 'Pink Leaf Café', body: 'Our garden café — pour-overs, sourdough toasties, jam from the kitchen, jazz on Sundays.' },
];

export default async function HomePage() {
  const testimonial = await fetchOrFallback(queries.featuredTestimonial, fallbackTestimonial);

  return (
    <>
      {/* Hero — editorial */}
      <section style={{ position: 'relative', padding: '40px 0 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'end',
              paddingBottom: 32,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <span className="num">N° 01 / SATPURA FOOTHILLS</span>
              </div>
              <h1
                className="display"
                style={{ fontSize: 'clamp(64px, 10vw, 168px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}
              >
                Aarany<span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--moss)' }}>.</span>
              </h1>
              <p
                className="italic"
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 32px)',
                  color: 'var(--ink-soft)',
                  marginTop: 12,
                  lineHeight: 1.2,
                }}
              >
                Serenity, that you deserve.
              </p>
            </div>
            <div style={{ paddingBottom: 16 }}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 460, marginLeft: 'auto' }}>
                A small jungle retreat tucked into the green folds of Madhya Pradesh — three pool-side villas, a quiet
                restaurant, and a café called <em>Pink Leaf</em>. We serve slow mornings and louder evenings around the fire.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'flex-end' }}>
                <Link href="/stay" className="btn btn-primary btn-arrow">Plan a Stay</Link>
                <Link href="/adventures" className="btn btn-ghost">Adventures</Link>
              </div>
            </div>
          </div>

          <Placeholder
            label="Hero · Wide drone shot — pool villas at dusk, jungle beyond, warm lanterns"
            ratio="21/9"
            corner="01 · HERO"
            style={{ marginTop: 8 }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              marginTop: 28,
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.v}
                style={{
                  padding: '22px 24px',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
                }}
              >
                <div className="display" style={{ fontSize: 38, lineHeight: 1 }}>{s.k}</div>
                <div className="mono" style={{ marginTop: 6, color: 'var(--ink-mute)' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '18px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{ display: 'inline-flex', gap: 40, animation: 'marquee 40s linear infinite' }}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="mono" style={{ color: 'var(--ink-mute)', display: 'inline-flex', gap: 40 }}>
              <span>· STAY ·</span>
              <span>SAFARI</span>
              <span>POOL VILLAS</span>
              <span>PINK LEAF CAFÉ</span>
              <span>BONFIRES</span>
              <span>BIRDWATCHING</span>
              <span>TREKS</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
            }}
          >
            <div style={{ position: 'sticky', top: 100 }}>
              <SectionHead num="N° 02" eyebrow="The House" title="A small place, kept on purpose." />
            </div>
            <div className="stack-lg">
              <p style={{ fontSize: 22, lineHeight: 1.45, fontFamily: 'var(--serif)', fontWeight: 300 }}>
                Aarany sits on twelve forested acres at the edge of the Satpura range, an hour and a quarter from Bhopal.
                The land was a fruit grove; the trees stayed, the rest came slowly.
              </p>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16, maxWidth: 580 }}>
                We kept the house small on purpose — three pool villas, one shared veranda, a kitchen that opens onto the
                garden. Mornings are for birds and chai; afternoons for the pool; evenings for whatever the kitchen has
                picked that day. Children are welcome. Phones, less so.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 8 }}>
                <Placeholder label="Veranda — ceiling fans, cane chairs, brass" ratio="4/5" corner="02·a" />
                <Placeholder
                  label="Detail — hand-thrown clay cup on stone ledge"
                  ratio="4/5"
                  corner="02·b"
                  style={{ marginTop: 40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="section-tight"
        style={{
          background: 'var(--bg-soft)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container">
          <SectionHead
            num="N° 03"
            eyebrow="What we offer"
            title="What you&apos;ll find <em>here.</em>"
            kicker="A short list, on purpose. We do a few things and try to do them well."
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              marginTop: 64,
              borderTop: '1px solid var(--line)',
            }}
          >
            {highlights.map((it, i) => (
              <div
                key={it.num}
                style={{
                  padding: '32px 28px',
                  borderRight: i < highlights.length - 1 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span className="num">{it.num}</span>
                <h3 className="display" style={{ fontSize: 28, marginTop: 18, lineHeight: 1.05 }}>{it.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 14, lineHeight: 1.55 }}>{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pink Leaf feature */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
            <Placeholder
              label="Pink Leaf — café table, pour-over kit, rosemary in a clay vase"
              ratio="5/4"
              corner="04"
            />
            <div>
              <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>N° 04 — A garden café</span>
              <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginTop: 20 }}>
                Pink <em>Leaf</em>.
              </h2>
              <p className="hand" style={{ fontSize: 28, color: 'var(--pink-deep)', marginTop: 4 }}>
                est. under the gulmohar tree
              </p>
              <p style={{ marginTop: 22, color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.6 }}>
                A 12-seat café tucked between the pool villas and the kitchen garden. Beans from Coorg, bread baked at six,
                citrus jam from December oranges. Open to guests and to anyone who finds their way to the gate.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/pink-leaf" className="btn btn-ghost btn-arrow">Visit Pink Leaf</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        className="section-tight"
        style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden
            style={{ color: 'var(--moss)', margin: '0 auto' }}
          >
            <circle cx="24" cy="24" r="3" fill="currentColor" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const x1 = 24 + Math.cos(angle) * 8;
              const y1 = 24 + Math.sin(angle) * 8;
              const x2 = 24 + Math.cos(angle) * 18;
              const y2 = 24 + Math.sin(angle) * 18;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
            })}
          </svg>
          <p
            className="display"
            style={{
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              lineHeight: 1.2,
              maxWidth: 880,
              margin: '24px auto 0',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            “{(testimonial as { quote: string }).quote}”
          </p>
          <div className="mono" style={{ color: 'var(--ink-mute)', marginTop: 28 }}>
            {(testimonial as { author: string }).author.toUpperCase()} ·{' '}
            {(testimonial as { meta?: string }).meta?.toUpperCase()}
          </div>
        </div>
      </section>
    </>
  );
}
