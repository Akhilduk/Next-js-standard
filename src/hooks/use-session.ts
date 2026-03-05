'use client';
import { useEffect, useState } from 'react';

export function useSession() {
  const [session, setSession] = useState<{ ok: boolean } | null>(null);
  useEffect(() => {
    fetch('/api/auth/refresh', { method: 'POST' }).then((r) => r.json()).then(() => setSession({ ok: true }));
  }, []);
  return session;
}
