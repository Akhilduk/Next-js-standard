import { cookies } from 'next/headers';
import crypto from 'node:crypto';
import { prisma } from '@/lib/db/prisma';

const COOKIE_NAME = 'session';

export async function createSession(userId: string) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 8);
  await prisma.session.create({ data: { tokenHash: token, userId, expiresAt } });
  cookies().set(COOKIE_NAME, token, { httpOnly: true, secure: true, sameSite: 'lax', path: '/' });
}

export async function destroySession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (token) await prisma.session.deleteMany({ where: { tokenHash: token } });
  cookies().delete(COOKIE_NAME);
}

export async function getSessionUser() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  const session = await prisma.session.findFirst({
    where: { tokenHash: token, expiresAt: { gt: new Date() } },
    include: { user: { include: { userRoles: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } } } } }
  });
  return session?.user ?? null;
}
