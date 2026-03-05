import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db/prisma';
import { createSession } from '@/lib/auth/session';
import { validatePassword } from '@/lib/security/password-policy';
import { checkRateLimit } from '@/lib/security/rate-limit';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'local';
  const limit = checkRateLimit(`signin:${ip}`, 20, 60000);
  if (!limit.allowed) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const policy = validatePassword(password);
  if (!policy.valid) return NextResponse.json({ error: 'Password policy failed' }, { status: 400 });
  await createSession(user.id);
  return NextResponse.json({ ok: true });
}
