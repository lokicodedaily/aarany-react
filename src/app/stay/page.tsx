import type { Metadata } from 'next';
import Image from 'next/image';
import { Placeholder } from '@/components/placeholder';
import { SectionHead } from '@/components/section-head';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackRooms } from '@/lib/data';
import { blurData } from '@/lib/image-placeholders';

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

const roomImages: Record<string, { src: string; position?: string }> = {
  '01': { src: '/villaone.webp' },
  '02': { src: '/villatwo.webp' },
  '03': { src: '/villathree.webp' },
};

export default async function StayPage() {
  const rooms = await fetchOrFallback<Room[]>(queries.rooms, fallbackRooms as Room[]);

  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container">
          <SectionHead
            num="N° 02"
            eyebrow="Stay with us"
            title="Three villas, one pool each, twelve trees between them."
            kicker="Book one. Book all three. Either way, the gate stays closed for as long as you're here."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          {rooms.map((r, i) => {
            const reverse = i % 2 !== 0;
            return (
              <Reveal
                key={r._id}
                className={cn(
                  'grid md:grid-cols-[1.15fr_1fr] gap-14 items-center py-[60px] border-t border-line',
                  reverse && 'md:grid-cols-[1fr_1.15fr]'
                )}
              >
                <div className={reverse ? 'md:order-2' : 'md:order-1'}>
                  {roomImages[r.number] ? (
                    <div className="relative overflow-hidden rounded" style={{ aspectRatio: '5/4' }}>
                      <Image
                        src={roomImages[r.number].src}
                        alt={`Villa ${r.number} — ${r.name}`}
                        fill
                        placeholder="blur"
                        blurDataURL={blurData[roomImages[r.number].src]}
                        className="object-cover"
                        style={{ objectPosition: roomImages[r.number].position ?? 'center' }}
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
                    </div>
                  ) : (
                    <Placeholder
                      label={`Villa ${r.number} — interior, light streaming through cane blinds`}
                      ratio="5/4"
                      corner={`VILLA ${r.number}`}
                    />
                  )}
                </div>
                <div
                  className={cn(
                    reverse ? 'md:order-1 md:pr-6' : 'md:order-2 md:pl-6'
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="num">N° {r.number}</span>
                    <span className="mono text-ink-mute">
                      SLEEPS {r.sleeps} · {r.sizeSqM} M²
                    </span>
                  </div>
                  <h3
                    className="display mt-4 leading-none"
                    style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
                  >
                    {r.name}
                  </h3>
                  <p className="italic-display text-[22px] text-moss mt-1.5">{r.subName}</p>
                  <p className="mt-5 text-ink-soft text-base max-w-[480px]">{r.description}</p>
                  <ul className="list-none p-0 mt-6 grid grid-cols-2 gap-2 max-w-[460px]">
                    {(r.features ?? []).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[13px] text-ink-soft"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-6 mt-9 pt-6 border-t border-line">
                    <div>
                      <span className="mono text-ink-mute text-[10px]">PER NIGHT</span>
                      <div className="display text-[40px] leading-none mt-1">
                        ₹{r.pricePerNight.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <Button variant="ghost" arrow asChild className="ml-auto">
                      <a href="https://www.makemytrip.com/hotels/aarany_jungle_resort_and_adventure-details-sonkach.html" target="_blank" rel="noopener noreferrer">Book on MakeMyTrip</a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Pricing example */}
      <section className="section-tight bg-bg-soft border-t border-line">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">
            <div>
              <SectionHead eyebrow="Worked example" title="How a stay <em>adds up.</em>" />
              <p className="mt-7 text-ink-soft text-[15px] max-w-[360px]">
                A real booking, taken from our ledger this week. Take all three villas as a buy-out and the discount
                applies automatically.
              </p>
            </div>
            <Card>
              <div className="p-[36px_40px]">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="mono text-ink-mute">BOOKING SAMPLE · #AAR-0510</span>
                  <span className="mono text-ink-mute">1 NIGHT</span>
                </div>
                {[
                  ['Pool Villa 1 · The Mahua', '₹6,500'],
                  ['Pool Villa 2 · The Gulmohar', '₹6,500'],
                  ['Pool Villa 3 · The Tendu', '₹6,500'],
                ].map(([label, amount]) => (
                  <div
                    key={label}
                    className="flex justify-between py-3 border-b border-dashed border-line"
                  >
                    <span>{label}</span>
                    <span className="tabular">{amount}</span>
                  </div>
                ))}
                <div className="flex justify-between py-4 border-b border-line font-medium">
                  <span>Subtotal · 3 villas</span>
                  <span className="tabular">₹19,500</span>
                </div>
                <div className="flex justify-between py-4 text-terracotta">
                  <div>
                    <div>Goodwill discount</div>
                    <div className="mono text-[10px] text-ink-mute mt-0.5">
                      RESTAURANT RENOVATION · −20%
                    </div>
                  </div>
                  <span className="tabular">−₹3,900</span>
                </div>
                <div className="flex justify-between pt-5 pb-1 border-t border-ink mt-2">
                  <span className="display text-2xl">Final payable</span>
                  <span className="display text-[32px] tabular">₹15,600</span>
                </div>
                <p className="mono mt-6 text-ink-mute text-[10px] leading-[1.6]">
                  CHECK-IN SUN 10 MAY 2026 · CHECK-OUT MON 11 MAY 2026 · BOOKED 07 MAY 2026
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
