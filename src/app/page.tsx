import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Placeholder } from '@/components/placeholder';
import { SectionHead } from '@/components/section-head';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackTestimonial } from '@/lib/data';
import { blurData } from '@/lib/image-placeholders';
import { ParallaxHero } from '@/components/parallax-hero';

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

const marqueeRow = ['· STAY ·', 'SAFARI', 'POOL VILLAS', 'PINK LEAF CAFÉ', 'BONFIRES', 'BIRDWATCHING', 'TREKS'];

export default async function HomePage() {
  const testimonial = await fetchOrFallback(queries.featuredTestimonial, fallbackTestimonial);

  return (
    <>
      {/* Hero — editorial split */}
      <section className="relative pt-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-end pb-8">
            <div>
              <div className="mb-8">
                <span className="num">N° 01 / SATPURA FOOTHILLS</span>
              </div>
              <h1
                className="display"
                style={{ fontSize: 'clamp(64px, 10vw, 168px)', lineHeight: 0.92, letterSpacing: '-0.03em' }}
              >
                Aarany<span className="italic font-light text-moss">.</span>
              </h1>
              <p
                className="italic-display text-ink-soft mt-3"
                style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.2 }}
              >
                Serenity, that you deserve.
              </p>
            </div>
            <div className="pb-4">
              <p className="text-[17px] leading-[1.6] text-ink-soft max-w-[460px] md:ml-auto">
                A small jungle retreat tucked into the green folds of Madhya Pradesh — three pool-side villas, a quiet
                restaurant, and a café called <em>Pink Leaf</em>. We serve slow mornings and louder evenings around the fire.
              </p>
              <div className="flex gap-3 mt-7 md:justify-end">
                <Button variant="primary" arrow asChild>
                  <Link href="/stay">Plan a Stay</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/adventures">Adventures</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full mt-2 overflow-hidden rounded" style={{ aspectRatio: '21/9' }}>
            <ParallaxHero
              src="/HomeHero.webp"
              alt="Pool villas at dusk, jungle beyond, warm lanterns — AARANY Resort"
              blurDataURL={blurData['/HomeHero.webp']}
            />
          </div>

          <div className="grid grid-cols-4 mt-7 border-y border-line">
            {stats.map((s, i) => (
              <Reveal
                key={s.v}
                delay={i * 80}
                className={cn('px-6 py-[22px]', i > 0 && 'border-l border-line')}
              >
                <div className="display text-[38px] leading-none">{s.k}</div>
                <div className="mono mt-1.5 text-ink-mute">{s.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-line py-[18px] overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-10 animate-marquee">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="mono text-ink-mute inline-flex gap-10">
              {marqueeRow.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-[clamp(40px,6vw,100px)] items-start">
            <div className="md:sticky md:top-[100px]">
              <SectionHead num="N° 02" eyebrow="The House" title="A small place, kept on purpose." />
            </div>
            <div className="stack-lg">
              <Reveal>
                <p className="font-serif font-light text-[22px] leading-[1.45]">
                  Aarany sits on twelve forested acres at the edge of the Satpura range, an hour and a quarter from Bhopal.
                  The land was a fruit grove; the trees stayed, the rest came slowly.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-ink-soft text-base max-w-[580px]">
                  We kept the house small on purpose — three pool villas, one shared veranda, a kitchen that opens onto the
                  garden. Mornings are for birds and chai; afternoons for the pool; evenings for whatever the kitchen has
                  picked that day. Children are welcome. Phones, less so.
                </p>
              </Reveal>
              <Reveal delay={160} className="grid grid-cols-2 gap-4 mt-2">
                <div className="relative overflow-hidden rounded" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src="/CainChair.webp"
                    alt="Veranda — cane chair, ceiling fans, brass"
                    fill
                    placeholder="blur"
                    blurDataURL={blurData['/CainChair.webp']}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded mt-10" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src="/ChaiCup.webp"
                    alt="Detail — hand-thrown clay cup on stone ledge"
                    fill
                    placeholder="blur"
                    blurDataURL={blurData['/ChaiCup.webp']}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-tight bg-bg-soft border-y border-line">
        <div className="container">
          <SectionHead
            num="N° 03"
            eyebrow="What we offer"
            title="What you&apos;ll find <em>here.</em>"
            kicker="A short list, on purpose. We do a few things and try to do them well."
          />
          <div className="grid grid-cols-4 mt-16 border-t border-line">
            {highlights.map((it, i) => (
              <Reveal
                key={it.num}
                delay={i * 90}
                className={cn(
                  'px-7 py-8 border-b border-line',
                  i < highlights.length - 1 && 'border-r border-line'
                )}
              >
                <span className="num">{it.num}</span>
                <h3 className="display text-[28px] mt-4 leading-[1.05]">{it.title}</h3>
                <p className="text-sm text-ink-soft mt-3.5 leading-[1.55]">{it.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pink Leaf feature */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded" style={{ aspectRatio: '5/4' }}>
                <Image
                  src="/coffee.webp"
                  alt="Pink Leaf — café table, pour-over kit, rosemary in a clay vase"
                  fill
                  placeholder="blur"
                  blurDataURL={blurData['/coffee.webp']}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow text-pink-deep">N° 04 — A garden café</span>
              <h2 className="display mt-5" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
                Pink <em>Leaf</em>.
              </h2>
              <p className="font-hand text-[28px] text-pink-deep mt-1">est. under the gulmohar tree</p>
              <p className="mt-[22px] text-ink-soft text-base leading-[1.6]">
                A 12-seat café tucked between the pool villas and the kitchen garden. Beans from Coorg, bread baked at six,
                citrus jam from December oranges. Open to guests and to anyone who finds their way to the gate.
              </p>
              <div className="mt-8">
                <Button variant="ghost" arrow asChild>
                  <Link href="/pink-leaf">Visit Pink Leaf</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-tight border-y border-line">
        <Reveal className="container text-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden
            className="text-moss mx-auto"
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
            className="display italic font-light max-w-[880px] mx-auto mt-6"
            style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.2 }}
          >
            “{(testimonial as { quote: string }).quote}”
          </p>
          <div className="mono text-ink-mute mt-7">
            {(testimonial as { author: string }).author.toUpperCase()} ·{' '}
            {(testimonial as { meta?: string }).meta?.toUpperCase()}
          </div>
        </Reveal>
      </section>
    </>
  );
}
