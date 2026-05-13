import { CSSProperties } from 'react';

interface SectionHeadProps {
  num?: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: 'left' | 'center';
}

export default function SectionHead({ num, eyebrow, title, kicker, align = 'left' }: SectionHeadProps) {
  const centered = align === 'center';
  const wrapStyle: CSSProperties = {
    textAlign: align,
    maxWidth: centered ? 720 : 820,
    margin: centered ? '0 auto' : 0,
  };
  const rowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    justifyContent: centered ? 'center' : 'flex-start',
    marginBottom: 20,
  };
  const kickerStyle: CSSProperties = {
    marginTop: 22,
    fontSize: 16,
    color: 'var(--ink-soft)',
    maxWidth: 560,
    marginLeft: centered ? 'auto' : 0,
    marginRight: centered ? 'auto' : 0,
  };
  return (
    <div style={wrapStyle}>
      <div style={rowStyle}>
        {num && <span className="num">{num}</span>}
        {num && <span style={{ width: 40, height: 1, background: 'var(--line)', display: 'inline-block' }} />}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className="display"
        style={{ fontSize: 'clamp(38px, 5.5vw, 76px)', lineHeight: 1.02 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {kicker && <p style={kickerStyle}>{kicker}</p>}
    </div>
  );
}
