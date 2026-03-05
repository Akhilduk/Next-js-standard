import Link from 'next/link';
import { ReactNode } from 'react';

const nav = ['dashboard', 'masters/departments', 'transactions', 'requests', 'admin'];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        <h2 className="mb-4 font-bold">Enterprise</h2>
        <nav className="space-y-2">
          {nav.map((n) => (
            <Link key={n} href={`/${n}`} className="block rounded p-2 hover:bg-muted">{n}</Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
