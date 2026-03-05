import { redirect } from 'next/navigation';
import { getSessionUser } from '@/lib/auth/session';

export async function requireAuth() {
  const user = await getSessionUser();
  if (!user) redirect('/sign-in');
  return user;
}

export async function requireRole(roleName: string) {
  const user = await requireAuth();
  const has = user.userRoles.some((ur) => ur.role.name === roleName);
  if (!has) redirect('/dashboard');
  return user;
}

export async function requirePermission(permission: string) {
  const user = await requireAuth();
  const perms = new Set(user.userRoles.flatMap((ur) => ur.role.rolePermissions.map((rp) => rp.permission.key)));
  if (!perms.has(permission)) redirect('/dashboard');
  return user;
}

export async function requireAnyPermission(permissions: string[]) {
  const user = await requireAuth();
  const perms = new Set(user.userRoles.flatMap((ur) => ur.role.rolePermissions.map((rp) => rp.permission.key)));
  if (!permissions.some((p) => perms.has(p))) redirect('/dashboard');
  return user;
}
