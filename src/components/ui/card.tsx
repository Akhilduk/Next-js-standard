import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-border bg-white/5 p-4 shadow-sm">{children}</div>;
}
