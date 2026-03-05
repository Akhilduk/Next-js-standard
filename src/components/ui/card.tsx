import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-white to-cyan-50/40 p-4 shadow-md shadow-slate-300/30 dark:from-slate-900 dark:to-slate-800/80">
      {children}
    </div>
  );
}
