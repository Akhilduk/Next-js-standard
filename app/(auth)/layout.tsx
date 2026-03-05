import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl items-center justify-center p-8">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-xl shadow-slate-200/60 dark:bg-slate-900 dark:shadow-slate-900/40">
        {children}
      </div>
    </div>
  );
}
