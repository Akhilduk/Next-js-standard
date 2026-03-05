'use client';

import { useState } from 'react';
import { ReactNode } from 'react';

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function Tabs({ items, defaultTab }: { items: TabItem[]; defaultTab?: string }) {
  const [active, setActive] = useState(defaultTab ?? items[0]?.id ?? '');
  const current = items.find((i) => i.id === active) ?? items[0];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-slate-50 p-2 dark:bg-slate-900">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={item.id === current?.id ? 'rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold text-white' : 'rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-800'}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-white p-4 dark:bg-slate-900">{current?.content}</div>
    </div>
  );
}
