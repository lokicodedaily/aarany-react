import type { Metadata } from 'next';
import { Placeholder } from '@/components/placeholder';
import { SectionHead } from '@/components/section-head';
import { Card, CardContent } from '@/components/ui/card';
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
      <section className="relative">
        <Placeholder
          label="Wide — open jeep on a red-dirt forest track at dawn"
          ratio="auto"
          corner="N° 03"
          className="!rounded-none !border-0 border-y border-line min-h-[400px] h-[60vh]"
        >
          <div
            className="absolute inset-0 flex items-center"
            style={{ padding: '0 clamp(40px, 8vw, 120px)' }}
          >
            <div className="max-w-[600px]">
              <span className="eyebrow">Adventures</span>
              <h1
                className="display mt-4 leading-none"
                style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {adventures.map((a) => (
              <Card key={a._id} className="flex flex-col p-0">
                <Placeholder
                  label={`${a.title} — ${a.subtitle}`}
                  ratio="4/3"
                  corner={a.number}
                  className="!rounded-none !border-0 border-b border-line"
                />
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="num">{a.number}</span>
                    <span className="mono text-ink-mute">
                      {a.duration} · {a.startTime}
                    </span>
                  </div>
                  <h3 className="display text-[32px] mt-3.5 leading-[1.05]">{a.title}</h3>
                  <p className="italic-display text-base text-moss mt-1">{a.subtitle}</p>
                  <p className="text-sm text-ink-soft mt-4 leading-[1.55] flex-1">
                    {a.description}
                  </p>
                  <div className="mono mt-[22px] pt-[18px] border-t border-dashed border-line text-ink-mute">
                    {a.priceNote}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily rhythm */}
      <section className="section-tight bg-bg-soft border-t border-line">
        <div className="container grid md:grid-cols-[1fr_1.6fr] gap-14">
          <SectionHead eyebrow="Daily rhythm" title="A day, <em>roughly.</em>" />
          <div>
            {dailyRhythm.map(([time, body]) => (
              <div
                key={time}
                className="grid grid-cols-[100px_1fr] gap-6 py-[18px] border-t border-line items-baseline"
              >
                <span className="mono text-ink-mute">{time}</span>
                <p className="text-base text-ink-soft">{body}</p>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>
    </>
  );
}
