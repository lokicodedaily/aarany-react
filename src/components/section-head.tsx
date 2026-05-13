import { cn } from '@/lib/utils';

interface SectionHeadProps {
  num?: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: 'left' | 'center';
}

export function SectionHead({ num, eyebrow, title, kicker, align = 'left' }: SectionHeadProps) {
  const centered = align === 'center';
  return (
    <div className={cn(centered ? 'text-center mx-auto max-w-[720px]' : 'text-left max-w-[820px]')}>
      <div className={cn('flex items-center gap-3.5 mb-5', centered && 'justify-center')}>
        {num && <span className="num">{num}</span>}
        {num && <span className="inline-block w-10 h-px bg-line" />}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className="display leading-[1.02]"
        style={{ fontSize: 'clamp(38px, 5.5vw, 76px)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {kicker && (
        <p
          className={cn('mt-[22px] text-base text-ink-soft max-w-[560px]', centered && 'mx-auto')}
        >
          {kicker}
        </p>
      )}
    </div>
  );
}
