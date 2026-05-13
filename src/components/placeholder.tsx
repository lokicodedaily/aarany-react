import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderProps {
  label: string;
  ratio?: string;
  corner?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

// Hatched, captioned stand-in for real photography. Captions describe the intended shot
// so a content editor can drop in the right image later.
export function Placeholder({
  label,
  ratio = '4/3',
  corner,
  className,
  style,
  children,
}: PlaceholderProps) {
  return (
    <div
      className={cn('ph', className)}
      data-label={label}
      style={{ aspectRatio: ratio, ...style }}
    >
      {corner && <span className="ph-corner">{corner}</span>}
      {children}
    </div>
  );
}
