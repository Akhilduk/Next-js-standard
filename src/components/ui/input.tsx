import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('w-full rounded-md border border-border bg-transparent px-3 py-2')} {...props} />;
}
