import type { Metadata } from 'next';
import { Placeholder } from '@/components/placeholder';
import { SectionHead } from '@/components/section-head';
import { Button } from '@/components/ui/button';
import { fetchOrFallback, queries } from '@/lib/sanity';
import { fallbackGallery } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Gallery · AARANY Jungle Resort',
  description:
    'Moments from AARANY — pool villas, the jungle, the kitchen, Pink Leaf café. Mostly shot on film.',
};

type Photo = { _id: string; caption?: string; aspectRatio?: string; order?: number };

function ratioStyle(ar?: string): { ratio: string; span: number } {
  const map: Record<string, { ratio: string; span: number }> = {
    square: { ratio: '1/1', span: 1 },
    portrait: { ratio: '3/4', span: 1 },
    landscape: { ratio: '4/3', span: 1 },
    wide: { ratio: '16/10', span: 2 },
  };
  return map[ar ?? 'square'] ?? { ratio: '1/1', span: 1 };
}

export default async function GalleryPage() {
  const photos = await fetchOrFallback<Photo[]>(queries.gallery, fallbackGallery as Photo[]);

  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container">
          <SectionHead
            num="N° 06"
            eyebrow="The album"
            title="A few <em>moments</em>, kept."
            kicker="Most are taken on a film camera that lives by the front desk. You're welcome to borrow it."
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((p, i) => {
              const { ratio, span } = ratioStyle(p.aspectRatio);
              return (
                <div
                  key={p._id}
                  style={{ gridColumn: `span ${span}` }}
                >
                  <Placeholder
                    label={p.caption ?? ''}
                    ratio={ratio}
                    corner={String(i + 1).padStart(2, '0')}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="ghost" arrow asChild>
              <a href="mailto:hello@aarany.in">Send us yours</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
