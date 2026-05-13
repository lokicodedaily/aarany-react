import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.5rem', md: '3rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        // Earthy luxury safari palette — read directly via Tailwind utilities
        // (e.g. bg-bg, text-ink) so designers can compose without remembering hex.
        bg:          'hsl(var(--bg))',
        'bg-soft':   'hsl(var(--bg-soft))',
        ink:         'hsl(var(--ink))',
        'ink-soft':  'hsl(var(--ink-soft))',
        'ink-mute':  'hsl(var(--ink-mute))',
        line:        'hsl(var(--line))',
        moss:        'hsl(var(--moss))',
        forest:      'hsl(var(--forest))',
        terracotta:  'hsl(var(--terracotta))',
        sand:        'hsl(var(--sand))',
        pink:        'hsl(var(--pink))',
        'pink-deep': 'hsl(var(--pink-deep))',
        // shadcn semantic aliases — map to our palette
        background:  'hsl(var(--bg))',
        foreground:  'hsl(var(--ink))',
        muted:       { DEFAULT: 'hsl(var(--bg-soft))', foreground: 'hsl(var(--ink-mute))' },
        border:      'hsl(var(--line))',
        primary:     { DEFAULT: 'hsl(var(--ink))', foreground: 'hsl(var(--bg))' },
        secondary:   { DEFAULT: 'hsl(var(--bg-soft))', foreground: 'hsl(var(--ink))' },
        accent:      { DEFAULT: 'hsl(var(--moss))', foreground: 'hsl(var(--bg))' },
        destructive: { DEFAULT: 'hsl(var(--terracotta))', foreground: 'hsl(var(--bg))' },
        ring:        'hsl(var(--ink))',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Times New Roman', 'serif'],
        sans:  ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'ui-monospace', 'monospace'],
        hand:  ['var(--font-hand)', 'cursive'],
      },
      borderRadius: { lg: '4px', md: '3px', sm: '2px' },
      keyframes: {
        'fade-in':   { from: { opacity: '0', transform: 'translateY(6px)' }, to: { opacity: '1', transform: 'none' } },
        'marquee':   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-in': 'fade-in .45s ease both',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
