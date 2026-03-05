import { ReactNode } from 'react';

export function Alert({
  title,
  description,
  tone = 'info',
  action
}: {
  title: string;
  description: string;
  tone?: 'info' | 'success' | 'warning' | 'danger';
  action?: ReactNode;
}) {
  const toneClass =
    tone === 'success'
      ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-900/20'
      : tone === 'warning'
      ? 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-900/20'
      : tone === 'danger'
      ? 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-900/20'
      : 'border-sky-200 bg-sky-50 dark:border-sky-900 dark:bg-sky-900/20';

  return (
    <div className={`rounded-lg border p-3 ${toneClass}`}>
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">{description}</p>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
