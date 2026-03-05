import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';

const securedPrefixes = ['/dashboard', '/admin', '/masters', '/profile', '/settings', '/payments', '/transactions', '/requests'];

export function middleware(req: NextRequest) {
  const correlationId = req.headers.get('x-correlation-id') ?? randomUUID();
  const res = NextResponse.next({ request: { headers: new Headers(req.headers) } });

  res.headers.set('x-correlation-id', correlationId);
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self';");

  const needsAuth = securedPrefixes.some((p) => req.nextUrl.pathname.startsWith(p));
  const hasSession = Boolean(req.cookies.get('session'));
  if (needsAuth && !hasSession) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return res;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
