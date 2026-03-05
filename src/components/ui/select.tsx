import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn('w-full rounded-md border border-border bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:ring-2 dark:bg-slate-900', className)}
      {...props}
    />
  );
}
