import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackBeans, fallbackPinkleafMenu, fallbackCafeHours } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pink Leaf Café · AARANY',
  description:
    'A 12-seat garden café for slow mornings — pour-over coffee, sourdough toasties, citrus jam, and music under the gulmohar tree.',
};

type Bean = { _id: string; name: string; description: string; roastLevel?: string };
type MenuItem = { _id: string; name: string; description: string; price: number; section: string };
type HoursRow = { day: string; hours: string; note?: string };
type Hours = { schedule: HoursRow[] };

const sectionLabels: Record<string, string> = {
  espresso: 'Espresso.',
  bakery: 'From the bakery.',
  garden: 'Garden.',
};
const sectionOrder = ['espresso', 'bakery', 'garden'];

export default async function PinkLeafPage() {
  const beans = await fetchOrFallback<Bean[]>(queries.beans, fallbackBeans as Bean[]);
  const menuItems = await fetchOrFallback<MenuItem[]>(queries.pinkleafMenu, fallbackPinkleafMenu as MenuItem[]);
  const hoursData = await fetchOrFallback<Hours>(queries.cafeHours, fallbackCafeHours as Hours);

  const grouped: Record<string, MenuItem[]> = {};
  for (const item of menuItems) {
    const k = item.section ?? 'espresso';
    if (!grouped[k]) grouped[k] = [];
    grouped[k].push(item);
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          padding: '60px 0 40px',
          background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%)',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid var(--line)',
                  background: 'var(--bg)',
                }}
              >
                <span
                  style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--pink-deep)' }}
                />
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-soft)' }}>
                  A SUB OF AARANY · OPEN 07–18
                </span>
              </div>
              <h1
                className="display"
                style={{
                  fontSize: 'clamp(64px, 9vw, 148px)',
                  lineHeight: 0.88,
                  marginTop: 28,
                  letterSpacing: '-0.03em',
                }}
              >
                Pink<br />
                <em style={{ color: 'var(--pink-deep)' }}>Leaf.</em>
              </h1>
              <p
                className="hand"
                style={{
                  fontSize: 30,
                  color: 'var(--pink-deep)',
                  marginTop: 16,
                  whiteSpace: 'nowrap',
                  lineHeight: 1.1,
                }}
              >
                under the gulmohar tree
              </p>
              <p
                style={{
                  marginTop: 28,
                  fontSize: 17,
                  color: 'var(--ink-soft)',
                  maxWidth: 460,
                  lineHeight: 1.6,
                }}
              >
                A 12-seat café for slow mornings — pour-over coffee, sourdough toasties, citrus jam from December oranges,
                and music from a single, slightly-warped speaker. Open to guests and to anyone who finds their way to the gate.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link
                  href="/dine"
                  className="btn btn-primary btn-arrow"
                  style={{ background: 'var(--pink-deep)', borderColor: 'var(--pink-deep)' }}
                >
                  Today&apos;s pour-overs
                </Link>
                <Link href="/" className="btn btn-ghost">Find the gate</Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <Placeholder
                label="Pink Leaf — pink walls, cane chair, a single yellow flower in a clay vase"
                ratio="4/5"
                corner="P / L"
              />
              <div
                style={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'var(--pink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink)',
                  textAlign: 'center',
                  padding: 16,
                  transform: 'rotate(8deg)',
                }}
              >
                <div>
                  <div className="hand" style={{ fontSize: 22, lineHeight: 1.1 }}>
                    opens<br />at six!
                  </div>
                  <div className="mono" style={{ fontSize: 8, marginTop: 4 }}>EXCEPT MONDAYS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beans */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            {beans.map((b, i) => (
              <div key={b._id} style={{ padding: '32px 0', borderTop: '1px solid var(--line)' }}>
                <div className="mono" style={{ color: 'var(--pink-deep)' }}>BEAN N° 0{i + 1}</div>
                <h3 className="display" style={{ fontSize: 32, marginTop: 16 }}>{b.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 14, lineHeight: 1.6 }}>
                  {b.description}
                </p>
                <div className="mono" style={{ marginTop: 20, color: 'var(--ink-mute)' }}>
                  ROAST · {b.roastLevel?.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section
        className="section-tight"
        style={{
          background: 'var(--bg-soft)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>The board, today</span>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 6vw, 80px)', marginTop: 14 }}>Menu</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {sectionOrder
              .filter((k) => grouped[k]?.length)
              .map((k) => (
                <div key={k}>
                  <div className="hand" style={{ fontSize: 32, color: 'var(--pink-deep)' }}>
                    {sectionLabels[k]}
                  </div>
                  <hr className="rule" style={{ margin: '12px 0 16px' }} />
                  {grouped[k].map((item) => (
                    <div
                      key={item._id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: 12,
                        padding: '10px 0',
                        borderBottom: '1px dotted var(--line)',
                        alignItems: 'baseline',
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>
                          {item.description}
                        </div>
                      </div>
                      <div className="mono" style={{ fontVariantNumeric: 'tabular-nums' }}>₹{item.price}</div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56 }}>
            <div>
              <SectionHead eyebrow="Find us" title="The hours, <em>kept short.</em>" />
            </div>
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '14px 32px',
                  maxWidth: 540,
                }}
              >
                {(hoursData?.schedule ?? fallbackCafeHours.schedule).map((row) => (
                  <Fragment key={row.day}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>{row.day}</div>
                    <div className="mono" style={{ alignSelf: 'center', color: 'var(--ink-soft)' }}>
                      {row.hours}{row.note ? ` · ${row.note}` : ''}
                    </div>
                  </Fragment>
                ))}
              </div>
              <p
                className="hand"
                style={{ fontSize: 28, color: 'var(--pink-deep)', marginTop: 40 }}
              >
                see you tomorrow x
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
