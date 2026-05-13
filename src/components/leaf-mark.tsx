// Stylised leaf used as the brand mark in nav + footer.
interface LeafMarkProps {
  size?: number;
  className?: string;
}

export function LeafMark({ size = 20, className }: LeafMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M3 21 C3 12 9 4 21 3 C20 14 13 20 3 21 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M3 21 C9 16 14 11 21 3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
