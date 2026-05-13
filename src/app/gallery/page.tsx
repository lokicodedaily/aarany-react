import type { Metadata } from 'next';
import Placeholder from '@/components/Placeholder';
import SectionHead from '@/components/SectionHead';
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
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <SectionHead
            num="N° 06"
            eyebrow="The album"
            title="A few <em>moments</em>, kept."
            kicker="Most are taken on a film camera that lives by the front desk. You're welcome to borrow it."
          />
        </div>
      </section>

      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {photos.map((p, i) => {
              const { ratio, span } = ratioStyle(p.aspectRatio);
              return (
                <div key={p._id} style={{ gridColumn: `span ${span}` }}>
                  <Placeholder
                    label={p.caption ?? ''}
                    ratio={ratio}
                    corner={String(i + 1).padStart(2, '0')}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <a href="mailto:hello@aarany.in" className="btn btn-ghost btn-arrow">
              Send us yours
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
