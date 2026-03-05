import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  tone = 'default'
}: {
  children: ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}) {
  const toneClass =
    tone === 'success'
      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
      : tone === 'warning'
      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
      : tone === 'danger'
      ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
      : tone === 'info'
      ? 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300'
      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200';

  return <span className={cn('inline-flex rounded-full px-2 py-1 text-xs font-semibold', toneClass)}>{children}</span>;
}
