import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackRooms } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Stay · AARANY Jungle Resort',
  description:
    'Three private pool villas — The Mahua, The Gulmohar, and The Tendu — at AARANY Jungle Resort, Bhopal.',
};

type Room = {
  _id: string;
  number: string;
  name: string;
  subName: string;
  pricePerNight: number;
  sleeps: number;
  sizeSqM: number;
  description: string;
  features?: string[];
};

export default async function StayPage() {
  const rooms = await fetchOrFallback<Room[]>(queries.rooms, fallbackRooms as Room[]);

  return (
    <>
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <SectionHead
            num="N° 02"
            eyebrow="Stay with us"
            title="Three villas, one pool each, twelve trees between them."
            kicker="Book one. Book all three. Either way, the gate stays closed for as long as you're here."
          />
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          {rooms.map((r, i) => {
            const reverse = i % 2 !== 0;
            return (
              <article
                key={r._id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: reverse ? '1fr 1.15fr' : '1.15fr 1fr',
                  gap: 56,
                  alignItems: 'center',
                  padding: '60px 0',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div style={{ order: reverse ? 2 : 1 }}>
                  <Placeholder
                    label={`Villa ${r.number} — interior, light streaming through cane blinds`}
                    ratio="5/4"
                    corner={`VILLA ${r.number}`}
                  />
                </div>
                <div
                  style={{
                    order: reverse ? 1 : 2,
                    padding: reverse ? '0 24px 0 0' : '0 0 0 24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                    <span className="num">N° {r.number}</span>
                    <span className="mono" style={{ color: 'var(--ink-mute)' }}>
                      SLEEPS {r.sleeps} · {r.sizeSqM} M²
                    </span>
                  </div>
                  <h3
                    className="display"
                    style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', marginTop: 16, lineHeight: 1 }}
                  >
                    {r.name}
                  </h3>
                  <p className="italic" style={{ fontSize: 22, color: 'var(--moss)', marginTop: 6 }}>{r.subName}</p>
                  <p style={{ marginTop: 20, color: 'var(--ink-soft)', fontSize: 16, maxWidth: 480 }}>
                    {r.description}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '24px 0 0',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                      maxWidth: 460,
                    }}
                  >
                    {(r.features ?? []).map((f) => (
                      <li
                        key={f}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: 13,
                          color: 'var(--ink-soft)',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--moss)',
                            flex: '0 0 auto',
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 24,
                      marginTop: 36,
                      paddingTop: 24,
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <div>
                      <span className="mono" style={{ color: 'var(--ink-mute)', fontSize: 10 }}>PER NIGHT</span>
                      <div className="display" style={{ fontSize: 40, lineHeight: 1, marginTop: 4 }}>
                        ₹{r.pricePerNight.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <a
                      href="mailto:stay@aarany.in"
                      className="btn btn-ghost btn-arrow"
                      style={{ marginLeft: 'auto' }}
                    >
                      Hold this villa
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pricing example */}
      <section
        className="section-tight"
        style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)' }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
            <div>
              <SectionHead eyebrow="Worked example" title="How a stay <em>adds up.</em>" />
              <p style={{ marginTop: 28, color: 'var(--ink-soft)', fontSize: 15, maxWidth: 360 }}>
                A real booking, taken from our ledger this week. Take all three villas as a buy-out and the discount
                applies automatically.
              </p>
            </div>
            <div className="card" style={{ padding: '36px 40px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 24,
                }}
              >
                <span className="mono" style={{ color: 'var(--ink-mute)' }}>BOOKING SAMPLE · #AAR-0510</span>
                <span className="mono" style={{ color: 'var(--ink-mute)' }}>1 NIGHT</span>
              </div>
              {[
                ['Pool Villa 1 · The Mahua', '₹6,500'],
                ['Pool Villa 2 · The Gulmohar', '₹6,500'],
                ['Pool Villa 3 · The Tendu', '₹6,500'],
              ].map(([label, amount]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px dashed var(--line)',
                  }}
                >
                  <span>{label}</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{amount}</span>
                </div>
              ))}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--line)',
                  fontWeight: 500,
                }}
              >
                <span>Subtotal · 3 villas</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>₹19,500</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  color: 'var(--terracotta)',
                }}
              >
                <div>
                  <div>Goodwill discount</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 2 }}>
                    RESTAURANT RENOVATION · −20%
                  </div>
                </div>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>−₹3,900</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px 0 4px',
                  borderTop: '1px solid var(--ink)',
                  marginTop: 8,
                }}
              >
                <span className="display" style={{ fontSize: 24 }}>Final payable</span>
                <span className="display" style={{ fontSize: 32, fontVariantNumeric: 'tabular-nums' }}>₹15,600</span>
              </div>
              <p
                className="mono"
                style={{ marginTop: 24, color: 'var(--ink-mute)', fontSize: 10, lineHeight: 1.6 }}
              >
                CHECK-IN SUN 10 MAY 2026 · CHECK-OUT MON 11 MAY 2026 · BOOKED 07 MAY 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
