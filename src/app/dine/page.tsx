import Link from 'next/link';
import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackAaranyMenu, fallbackRenovationNotice } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Dine · AARANY Jungle Resort',
  description:
    'A short, seasonal menu from our open kitchen — Bundelkhandi cuisine, garden produce, slow mornings.',
};

type MenuItem = { _id: string; name: string; description: string; price: number; section: string };
type Notice = { active?: boolean; headline?: string; body?: string; discountPercent?: number };

const sectionLabels: Record<string, string> = {
  mornings: 'Mornings',
  'all-day': 'All day',
  evenings: 'Evenings',
};
const sectionOrder = ['mornings', 'all-day', 'evenings'];

export default async function DinePage() {
  const menu = await fetchOrFallback<MenuItem[]>(queries.aaranyMenu, fallbackAaranyMenu as MenuItem[]);
  const notice = await fetchOrFallback<Notice>(queries.renovationNotice, fallbackRenovationNotice);

  const grouped: Record<string, MenuItem[]> = {};
  for (const item of menu) {
    if (!grouped[item.section]) grouped[item.section] = [];
    grouped[item.section].push(item);
  }

  return (
    <>
      {/* Header */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end' }}>
            <div>
              <SectionHead
                num="N° 04"
                eyebrow="The Restaurant"
                title="From the kitchen, <em>slowly.</em>"
                kicker="A short menu that moves with the season. Mostly Bundelkhandi, some travels, all from the garden where it can be."
              />
            </div>
            <div>
              <p className="hand" style={{ fontSize: 32, color: 'var(--moss)', marginBottom: 8 }}>
                &ldquo;come hungry, leave slowly&rdquo;
              </p>
              <p className="mono" style={{ color: 'var(--ink-mute)' }}>OPEN · 07:00 — 22:30 · DAILY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation notice */}
      {notice?.active && (
        <section style={{ padding: '0 0 60px' }}>
          <div className="container">
            <div
              style={{
                border: '1px solid var(--terracotta)',
                background: 'color-mix(in oklab, var(--terracotta) 8%, var(--bg))',
                borderRadius: 'var(--radius)',
                padding: '32px 40px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 32,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--terracotta)',
                  color: 'var(--bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--serif)',
                  fontSize: 28,
                  lineHeight: 1,
                }}
              >
                i
              </div>
              <div>
                <div className="mono" style={{ color: 'var(--terracotta)', marginBottom: 8 }}>
                  {notice.headline}
                </div>
                <p style={{ fontSize: 17, color: 'var(--ink)', lineHeight: 1.5, maxWidth: 720 }}>
                  {notice.body ?? fallbackRenovationNotice.body}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div
                  className="display"
                  style={{ fontSize: 56, color: 'var(--terracotta)', lineHeight: 1 }}
                >
                  −{notice.discountPercent}<span style={{ fontSize: 32 }}>%</span>
                </div>
                <div className="mono" style={{ color: 'var(--ink-mute)', fontSize: 10, marginTop: 6 }}>
                  APPLIED AUTOMATICALLY
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Menu */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'start' }}>
            <Placeholder
              label="Open kitchen — copper pans, a flame, a marble counter"
              ratio="4/5"
              corner="MENU"
            />
            <div>
              <span className="eyebrow">A short menu, this week</span>
              <h3 className="display" style={{ fontSize: 44, marginTop: 14, lineHeight: 1 }}>What&apos;s cooking</h3>
              <div style={{ marginTop: 32 }}>
                {sectionOrder
                  .filter((key) => grouped[key]?.length)
                  .map((key, i) => (
                    <div key={key} style={i === 0 ? undefined : { marginTop: 36 }}>
                      <div className="mono" style={{ color: 'var(--moss)', marginBottom: 12 }}>
                        — {sectionLabels[key].toUpperCase()} —
                      </div>
                      {grouped[key].map((item) => (
                        <div
                          key={item._id}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            gap: 16,
                            alignItems: 'baseline',
                            padding: '10px 0',
                            borderBottom: '1px dashed var(--line)',
                          }}
                        >
                          <div>
                            <div style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>{item.name}</div>
                            <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 2 }}>
                              {item.description}
                            </div>
                          </div>
                          <div className="mono" style={{ fontVariantNumeric: 'tabular-nums' }}>₹{item.price}</div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <p
                className="mono"
                style={{ color: 'var(--ink-mute)', fontSize: 10, marginTop: 32, lineHeight: 1.6 }}
              >
                ALL PRICES IN ₹ · TAXES INCLUDED · MENU ROTATES WITH WHATEVER THE GARDEN IS DOING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pink Leaf cross-link */}
      <section
        className="section-tight"
        style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)' }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--pink-deep)' }}>
            For coffee, cake &amp; quiet mornings
          </span>
          <h3 className="display" style={{ fontSize: 56, marginTop: 16 }}>
            Visit our café — <em>Pink Leaf</em>.
          </h3>
          <p
            style={{
              marginTop: 18,
              color: 'var(--ink-soft)',
              maxWidth: 540,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A separate door, a separate kitchen, the same gulmohar tree.
          </p>
          <Link href="/pink-leaf" className="btn btn-primary btn-arrow" style={{ marginTop: 32 }}>
            Pink Leaf Café
          </Link>
        </div>
      </section>
    </>
  );
}
