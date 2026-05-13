import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import { Placeholder } from '@/components/placeholder';
import { SectionHead } from '@/components/section-head';
import { Button } from '@/components/ui/button';
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
        className="relative pt-14 pb-10"
        style={{ background: 'linear-gradient(180deg, hsl(var(--bg)) 0%, hsl(var(--bg-soft)) 100%)' }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-bg">
                <span className="w-2 h-2 rounded-full bg-pink-deep" />
                <span className="mono text-[10px] text-ink-soft">A SUB OF AARANY · OPEN 07–18</span>
              </div>
              <h1
                className="display mt-7"
                style={{ fontSize: 'clamp(64px, 9vw, 148px)', lineHeight: 0.88, letterSpacing: '-0.03em' }}
              >
                Pink<br />
                <em className="text-pink-deep">Leaf.</em>
              </h1>
              <p className="font-hand text-[30px] text-pink-deep mt-4 whitespace-nowrap leading-[1.1]">
                under the gulmohar tree
              </p>
              <p className="mt-7 text-[17px] text-ink-soft max-w-[460px] leading-[1.6]">
                A 12-seat café for slow mornings — pour-over coffee, sourdough toasties, citrus jam from December oranges,
                and music from a single, slightly-warped speaker. Open to guests and to anyone who finds their way to the gate.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button variant="pink" arrow asChild>
                  <Link href="/dine">Today&apos;s pour-overs</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/">Find the gate</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Placeholder
                label="Pink Leaf — pink walls, cane chair, a single yellow flower in a clay vase"
                ratio="4/5"
                corner="P / L"
              />
              <div
                className="absolute -top-4 -right-4 w-[120px] h-[120px] rounded-full bg-pink text-ink p-4 grid place-items-center text-center"
                style={{ transform: 'rotate(8deg)' }}
              >
                <div>
                  <div className="font-hand text-[22px] leading-[1.1]">
                    opens<br />at six!
                  </div>
                  <div className="mono text-[8px] mt-1">EXCEPT MONDAYS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beans */}
      <section className="section-tight">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {beans.map((b, i) => (
              <div key={b._id} className="py-8 border-t border-line">
                <div className="mono text-pink-deep">BEAN N° 0{i + 1}</div>
                <h3 className="display text-[32px] mt-4">{b.name}</h3>
                <p className="text-sm text-ink-soft mt-3.5 leading-[1.6]">{b.description}</p>
                <div className="mono mt-5 text-ink-mute">ROAST · {b.roastLevel?.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-tight bg-bg-soft border-y border-line">
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow text-pink-deep">The board, today</span>
            <h2
              className="display mt-3.5"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Menu
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {sectionOrder
              .filter((k) => grouped[k]?.length)
              .map((k) => (
                <div key={k}>
                  <div className="font-hand text-[32px] text-pink-deep">{sectionLabels[k]}</div>
                  <hr className="h-px bg-line border-0 my-3" />
                  {grouped[k].map((item) => (
                    <div
                      key={item._id}
                      className="grid grid-cols-[1fr_auto] gap-3 items-baseline py-2.5 border-b border-dotted border-line"
                    >
                      <div>
                        <div className="font-serif text-lg">{item.name}</div>
                        <div className="text-xs text-ink-mute mt-0.5">{item.description}</div>
                      </div>
                      <div className="mono tabular">₹{item.price}</div>
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
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
            <SectionHead eyebrow="Find us" title="The hours, <em>kept short.</em>" />
            <div>
              <div
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3.5 max-w-[540px]"
              >
                {(hoursData?.schedule ?? fallbackCafeHours.schedule).map((row) => (
                  <Fragment key={row.day}>
                    <div className="font-serif text-2xl">{row.day}</div>
                    <div className="mono self-center text-ink-soft">
                      {row.hours}{row.note ? ` · ${row.note}` : ''}
                    </div>
                  </Fragment>
                ))}
              </div>
              <p className="font-hand text-[28px] text-pink-deep mt-10">see you tomorrow x</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
