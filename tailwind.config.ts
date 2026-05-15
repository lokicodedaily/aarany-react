import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  // We define `.container` ourselves in globals.css so it can cap at 1320px
  // on every viewport (matching the prototype) instead of only at 2xl.
  corePlugins: { container: false },
  theme: {
    extend: {
      colors: {
        // Each token uses `hsl(var(--x) / <alpha-value>)` so Tailwind's opacity
        // modifiers (bg-bg/15, text-ink/60) compose correctly. Plain
        // `hsl(var(--x))` would break under any opacity utility.
        bg:          'hsl(var(--bg) / <alpha-value>)',
        'bg-soft':   'hsl(var(--bg-soft) / <alpha-value>)',
        ink:         'hsl(var(--ink) / <alpha-value>)',
        'ink-soft':  'hsl(var(--ink-soft) / <alpha-value>)',
        'ink-mute':  'hsl(var(--ink-mute) / <alpha-value>)',
        line:        'hsl(var(--line) / <alpha-value>)',
        moss:        'hsl(var(--moss) / <alpha-value>)',
        forest:      'hsl(var(--forest) / <alpha-value>)',
        terracotta:  'hsl(var(--terracotta) / <alpha-value>)',
        sand:        'hsl(var(--sand) / <alpha-value>)',
        pink:        'hsl(var(--pink) / <alpha-value>)',
        'pink-deep': 'hsl(var(--pink-deep) / <alpha-value>)',
        // shadcn semantic aliases — point at the same palette.
        background:  'hsl(var(--bg) / <alpha-value>)',
        foreground:  'hsl(var(--ink) / <alpha-value>)',
        muted:       { DEFAULT: 'hsl(var(--bg-soft) / <alpha-value>)', foreground: 'hsl(var(--ink-mute) / <alpha-value>)' },
        border:      'hsl(var(--line) / <alpha-value>)',
        primary:     { DEFAULT: 'hsl(var(--ink) / <alpha-value>)', foreground: 'hsl(var(--bg) / <alpha-value>)' },
        secondary:   { DEFAULT: 'hsl(var(--bg-soft) / <alpha-value>)', foreground: 'hsl(var(--ink) / <alpha-value>)' },
        accent:      { DEFAULT: 'hsl(var(--moss) / <alpha-value>)', foreground: 'hsl(var(--bg) / <alpha-value>)' },
        destructive: { DEFAULT: 'hsl(var(--terracotta) / <alpha-value>)', foreground: 'hsl(var(--bg) / <alpha-value>)' },
        ring:        'hsl(var(--ink) / <alpha-value>)',
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
