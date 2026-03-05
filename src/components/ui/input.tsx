import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('w-full rounded-md border border-border bg-white px-3 py-2 outline-none ring-primary/30 transition focus:ring-2 dark:bg-slate-900')} {...props} />;
}
