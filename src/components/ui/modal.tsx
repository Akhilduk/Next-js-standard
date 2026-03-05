'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export function Modal({
  open,
  title,
  onClose,
  children
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-xl border border-border bg-white p-5 shadow-2xl dark:bg-slate-900" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button type="button" className="bg-slate-700" onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </div>
  );
}
