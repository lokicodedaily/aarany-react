import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackAdventures } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Adventures · AARANY Jungle Resort',
  description:
    'Jungle safari, forest trekking, birdwatching, stargazing, pottery, and cooking classes at AARANY, Satpura foothills.',
};

type Adventure = {
  _id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  startTime: string;
  description: string;
  priceNote: string;
};

const dailyRhythm: [string, string][] = [
  ['05:30', 'Naturalist tea on the veranda. Safari jeeps leave at 5:55.'],
  ['08:30', 'Breakfast — eggs from the coop, fruit from the garden, parathas, cold-press.'],
  ['10:00', 'Pool. Books. Hammock. Or, the short Aamla trail.'],
  ['13:30', "Lunch in the open kitchen. Ask Rampyari what's good today."],
  ['16:00', 'Saturdays: pottery with Mira. Other days: birding or the long trek.'],
  ['19:30', "Drinks under the gulmohar. Dinner whenever you're hungry."],
  ['22:00', 'Bonfire on the lawn. Telescopes if the sky is clear.'],
];

export default async function AdventuresPage() {
  const adventures = await fetchOrFallback<Adventure[]>(queries.adventures, fallbackAdventures as Adventure[]);

  return (
    <>
      {/* Banner */}
      <section style={{ position: 'relative', padding: 0 }}>
        <Placeholder
          label="Wide — open jeep on a red-dirt forest track at dawn"
          ratio="auto"
          corner="N° 03"
          style={{
            height: '60vh',
            minHeight: 400,
            borderRadius: 0,
            border: 0,
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              padding: '0 clamp(40px, 8vw, 120px)',
            }}
          >
            <div style={{ maxWidth: 600 }}>
              <span className="eyebrow">Adventures</span>
              <h1
                className="display"
                style={{ fontSize: 'clamp(48px, 7vw, 96px)', marginTop: 16, lineHeight: 1 }}
              >
                Walk it. Drive it. <em>Sit and listen to it.</em>
              </h1>
            </div>
          </div>
        </Placeholder>
      </section>

      {/* Adventure cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {adventures.map((a) => (
              <article
                key={a._id}
                className="card"
                style={{ padding: 0, display: 'flex', flexDirection: 'column' }}
              >
                <Placeholder
                  label={`${a.title} — ${a.subtitle}`}
                  ratio="4/3"
                  corner={a.number}
                  style={{
                    borderRadius: 0,
                    border: 0,
                    borderBottom: '1px solid var(--line)',
                  }}
                />
                <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span className="num">{a.number}</span>
                    <span className="mono" style={{ color: 'var(--ink-mute)' }}>
                      {a.duration} · {a.startTime}
                    </span>
                  </div>
                  <h3 className="display" style={{ fontSize: 32, marginTop: 14, lineHeight: 1.05 }}>
                    {a.title}
                  </h3>
                  <p className="italic" style={{ fontSize: 16, color: 'var(--moss)', marginTop: 4 }}>{a.subtitle}</p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-soft)',
                      marginTop: 16,
                      lineHeight: 1.55,
                      flex: 1,
                    }}
                  >
                    {a.description}
                  </p>
                  <div
                    className="mono"
                    style={{
                      marginTop: 22,
                      paddingTop: 18,
                      borderTop: '1px dashed var(--line)',
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {a.priceNote}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Daily rhythm */}
      <section
        className="section-tight"
        style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--line)' }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56 }}>
          <SectionHead eyebrow="Daily rhythm" title="A day, <em>roughly.</em>" />
          <div>
            {dailyRhythm.map(([time, body]) => (
              <div
                key={time}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 24,
                  padding: '18px 0',
                  borderTop: '1px solid var(--line)',
                  alignItems: 'baseline',
                }}
              >
                <span className="mono" style={{ color: 'var(--ink-mute)' }}>{time}</span>
                <p style={{ fontSize: 16, color: 'var(--ink-soft)' }}>{body}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
        </div>
      </section>
    </>
  );
}
