import { CSSProperties, ReactNode } from 'react';

interface PlaceholderProps {
  label: string;
  ratio?: string;
  corner?: string;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export default function Placeholder({
  label,
  ratio = '4/3',
  corner,
  style = {},
  className = '',
  children,
}: PlaceholderProps) {
  return (
    <div
      className={`ph ${className}`}
      data-label={label}
      style={{ aspectRatio: ratio, ...style }}
    >
      {corner && <span className="ph-corner">{corner}</span>}
      {children}
    </div>
  );
}
