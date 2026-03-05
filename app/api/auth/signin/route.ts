import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '@/lib/db/prisma';
import { createSession } from '@/lib/auth/session';
import { checkRateLimit } from '@/lib/security/rate-limit';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(256)
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'local';
  const limit = checkRateLimit(`signin:${ip}`, 20, 60000);
  if (!limit.allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: { 'Cache-Control': 'no-store' } });
  }

  const payload = signInSchema.safeParse(await req.json());
  if (!payload.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
  }

  const { email, password } = payload.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401, headers: { 'Cache-Control': 'no-store' } });
  await createSession(user.id);
  return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
}
