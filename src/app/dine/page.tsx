import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SectionHead } from '@/components/section-head';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackAaranyMenu, fallbackRenovationNotice } from '@/lib/data';
import { blurData } from '@/lib/image-placeholders';

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
      <section className="pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-14 items-end">
            <SectionHead
              num="N° 04"
              eyebrow="The Restaurant"
              title="From the kitchen, <em>slowly.</em>"
              kicker="A short menu that moves with the season. Mostly Bundelkhandi, some travels, all from the garden where it can be."
            />
            <div>
              <p className="font-hand text-[32px] text-moss mb-2">
                &ldquo;come hungry, leave slowly&rdquo;
              </p>
              <p className="mono text-ink-mute">OPEN · 07:00 — 22:30 · DAILY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation notice */}
      {notice?.active && (
        <section className="pb-14">
          <div className="container">
            <Reveal>
            <div
              className="border border-terracotta rounded p-[32px_40px] grid md:grid-cols-[auto_1fr_auto] gap-8 items-center"
              style={{ background: 'color-mix(in oklab, hsl(var(--terracotta)) 8%, hsl(var(--bg)))' }}
            >
              <div
                className="w-12 h-12 rounded-full bg-terracotta text-bg font-serif text-[28px] leading-none grid place-items-center"
              >
                i
              </div>
              <div>
                <div className="mono text-terracotta mb-2">{notice.headline}</div>
                <p className="text-[17px] text-ink leading-[1.5] max-w-[720px]">
                  {notice.body ?? fallbackRenovationNotice.body}
                </p>
              </div>
              <div className="text-right">
                <div className="display text-terracotta leading-none" style={{ fontSize: 56 }}>
                  −{notice.discountPercent}
                  <span style={{ fontSize: 32 }}>%</span>
                </div>
                <div className="mono text-ink-mute text-[10px] mt-1.5">APPLIED AUTOMATICALLY</div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Menu */}
      <section className="section-tight">
        <div className="container">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 items-start">
            <Reveal>
              <div className="relative w-full overflow-hidden rounded" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/Dine.webp"
                  alt="Open kitchen — copper pans, a flame, a marble counter"
                  fill
                  placeholder="blur"
                  blurDataURL={blurData['/Dine.webp']}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">A short menu, this week</span>
              <h3 className="display text-[44px] mt-3.5 leading-none">What&apos;s cooking</h3>
              <div className="mt-8">
                {sectionOrder
                  .filter((key) => grouped[key]?.length)
                  .map((key, i) => (
                    <div key={key} className={i === 0 ? '' : 'mt-9'}>
                      <div className="mono text-moss mb-3">— {sectionLabels[key].toUpperCase()} —</div>
                      {grouped[key].map((item) => (
                        <div
                          key={item._id}
                          className="grid grid-cols-[1fr_auto] gap-4 items-baseline py-2.5 border-b border-dashed border-line"
                        >
                          <div>
                            <div className="font-serif text-xl">{item.name}</div>
                            <div className="text-[13px] text-ink-mute mt-0.5">{item.description}</div>
                          </div>
                          <div className="mono tabular">₹{item.price}</div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <p className="mono text-ink-mute text-[10px] mt-8 leading-[1.6]">
                ALL PRICES IN ₹ · TAXES INCLUDED · MENU ROTATES WITH WHATEVER THE GARDEN IS DOING
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pink Leaf cross-link */}
      <section className="section-tight bg-bg-soft border-t border-line">
        <Reveal className="container text-center">
          <span className="eyebrow text-pink-deep">For coffee, cake &amp; quiet mornings</span>
          <h3 className="display text-[56px] mt-4">
            Visit our café — <em>Pink Leaf</em>.
          </h3>
          <p className="mt-4 text-ink-soft max-w-[540px] mx-auto">
            A separate door, a separate kitchen, the same gulmohar tree.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" arrow asChild>
              <Link href="/pink-leaf">Pink Leaf Café</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
