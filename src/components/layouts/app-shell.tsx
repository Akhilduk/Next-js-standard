'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Departments', href: '/masters/departments' },
  { label: 'Designations', href: '/masters/designations' },
  { label: 'Transactions', href: '/transactions' },
  { label: 'Requests', href: '/requests' },
  { label: 'Payments', href: '/payments' },
  { label: 'Admin', href: '/admin' },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile', href: '/profile' },
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' }
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl gap-6 px-4 py-6">
      <aside className="w-72 rounded-2xl border border-border bg-gradient-to-b from-slate-900 to-cyan-900 p-4 shadow-xl shadow-cyan-950/20">
        <h2 className="mb-1 text-lg font-bold text-white">Enterprise Console</h2>
        <p className="mb-4 text-xs text-cyan-100">All routes are open for QA/demo walkthrough.</p>
        <nav className="space-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'block rounded-lg border border-cyan-300 bg-cyan-500/20 px-3 py-2 text-sm font-semibold text-white' : 'block rounded-lg border border-transparent px-3 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-500/20 hover:text-white'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="min-w-0 flex-1 rounded-2xl border border-border bg-white/95 p-6 shadow-xl shadow-slate-400/10 dark:bg-slate-900/95">{children}</main>
    </div>
  );
}
