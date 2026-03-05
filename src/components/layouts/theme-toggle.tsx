'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

const LIGHT_VARS = {
  '--bg': '210 50% 98%',
  '--fg': '222 47% 11%',
  '--primary': '199 89% 48%',
  '--muted': '210 40% 96%',
  '--border': '214 35% 86%',
  '--danger': '0 72% 51%'
} as const;

const DARK_VARS = {
  '--bg': '224 45% 10%',
  '--fg': '210 40% 96%',
  '--primary': '196 94% 67%',
  '--muted': '217 33% 17%',
  '--border': '217 33% 24%',
  '--danger': '0 63% 31%'
} as const;

function applyTheme(mode: ThemeMode): ThemeMode {
  const root = document.documentElement;
  root.setAttribute('data-theme-mode', mode);
  root.setAttribute('data-resolved-theme', mode);
  root.classList.toggle('dark', mode === 'dark');
  root.style.colorScheme = mode;
  const vars = mode === 'dark' ? DARK_VARS : LIGHT_VARS;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
  return mode;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = (window.localStorage.getItem('theme_mode') as ThemeMode | null) ?? 'light';
    setTheme(stored);
    applyTheme(stored);
  }, []);

  return (
    <div className="flex items-center rounded-full border border-border bg-white/90 p-1 shadow-inner shadow-slate-300/30 dark:bg-slate-900/90">
      {(['light', 'dark'] as const).map((mode) => {
        const active = theme === mode;
        return (
          <label key={mode} className="cursor-pointer">
            <input
              type="radio"
              name="theme_mode"
              value={mode}
              checked={active}
              className="sr-only"
              onChange={() => {
                setTheme(mode);
                window.localStorage.setItem('theme_mode', mode);
                applyTheme(mode);
              }}
            />
            <span
              className={
                active
                  ? 'inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-cyan-700/30'
                  : 'inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }
            >
              {mode === 'light' ? 'Light' : 'Dark'}
            </span>
          </label>
        );
      })}
    </div>
  );
}
