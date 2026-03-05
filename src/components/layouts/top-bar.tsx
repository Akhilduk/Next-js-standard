'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layouts/theme-toggle';

function readCookie(name: string) {
  if (typeof document === 'undefined') return '';
  const part = document.cookie.split('; ').find((row) => row.startsWith(`${name}=`));
  return part ? decodeURIComponent(part.split('=')[1] ?? '') : '';
}

export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [traceId, setTraceId] = useState('n/a');
  const [signedIn, setSignedIn] = useState(false);
  const parts = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);

  useEffect(() => {
    setTraceId(readCookie('trace_id') || 'n/a');
    const hasSessionCookie = Boolean(readCookie('session'));
    const hasDemoSession = typeof window !== 'undefined' && window.localStorage.getItem('demo_session') === '1';
    setSignedIn(hasSessionCookie || hasDemoSession);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-gradient-to-r from-white/95 to-cyan-50/90 backdrop-blur dark:from-slate-950/95 dark:to-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Button type="button" className="bg-slate-700" onClick={() => router.back()}>Go Back</Button>
          <nav className="truncate text-sm text-slate-600 dark:text-slate-300">
            <Link href="/" className="font-semibold text-slate-900 dark:text-slate-100">Home</Link>
            {parts.map((part, idx) => {
              const href = `/${parts.slice(0, idx + 1).join('/')}`;
              const label = part.replace(/-/g, ' ');
              return (
                <span key={href}>
                  {' / '}
                  <a href={href} className="capitalize hover:underline">{label}</a>
                </span>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {signedIn ? (
            <Button
              type="button"
              className="bg-rose-600 text-xs"
              onClick={async () => {
                try {
                  await fetch('/api/auth/signout', { method: 'POST' });
                } catch {}
                document.cookie = 'session=; Max-Age=0; path=/';
                window.localStorage.removeItem('demo_session');
                setSignedIn(false);
                router.push('/sign-in');
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link href="/sign-in"><Button className="bg-cyan-600 text-xs">Sign In</Button></Link>
              <Link href="/sign-up"><Button className="bg-emerald-600 text-xs">Register</Button></Link>
            </>
          )}
          <div className="hidden rounded-md border border-border bg-white px-3 py-2 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:block">
            Trace ID: <span className="font-mono">{traceId}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
