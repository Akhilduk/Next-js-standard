import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        primary: 'hsl(var(--primary))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        danger: 'hsl(var(--danger))'
      }
    }
  },
  plugins: []
};

export default config;
