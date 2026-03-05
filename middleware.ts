import { NextRequest, NextResponse } from 'next/server';

const SENSITIVE_QUERY_KEYS = new Set(['email', 'password', 'pass', 'token', 'otp']);

export function middleware(req: NextRequest) {
  const isDev = process.env.NODE_ENV !== 'production';
  const correlationId = req.headers.get('x-correlation-id') ?? crypto.randomUUID();
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-correlation-id', correlationId);

  // Strip sensitive query params so credentials/tokens are never retained in URL history/logs.
  const sanitized = req.nextUrl.clone();
  let removedSensitive = false;
  for (const key of Array.from(sanitized.searchParams.keys())) {
    if (SENSITIVE_QUERY_KEYS.has(key.toLowerCase())) {
      sanitized.searchParams.delete(key);
      removedSensitive = true;
    }
  }
  if (removedSensitive) {
    const redirectRes = NextResponse.redirect(sanitized);
    redirectRes.headers.set('x-correlation-id', correlationId);
    redirectRes.headers.set('Cache-Control', 'no-store');
    redirectRes.cookies.set('trace_id', correlationId, {
      httpOnly: false,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 8
    });
    return redirectRes;
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  res.headers.set('x-correlation-id', correlationId);
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Cache-Control', 'no-store');
  const csp = isDev
    ? "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' ws: wss: http: https:;"
    : "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';";
  res.headers.set('Content-Security-Policy', csp);
  res.cookies.set('trace_id', correlationId, {
    httpOnly: false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return res;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
