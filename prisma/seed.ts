import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin#12345678', 12);
  const admin = await prisma.user.upsert({ where: { email: 'admin@corp.com' }, update: {}, create: { email: 'admin@corp.com', name: 'Admin', passwordHash } });
  const user = await prisma.user.upsert({ where: { email: 'user@corp.com' }, update: {}, create: { email: 'user@corp.com', name: 'User', passwordHash } });
  const roleAdmin = await prisma.role.upsert({ where: { name: 'ADMIN' }, update: {}, create: { name: 'ADMIN' } });
  const roleUser = await prisma.role.upsert({ where: { name: 'USER' }, update: {}, create: { name: 'USER' } });
  const perm = await prisma.permission.upsert({ where: { key: 'admin:users:write' }, update: {}, create: { key: 'admin:users:write', description: 'Manage users' } });
  await prisma.rolePermission.upsert({ where: { roleId_permissionId: { roleId: roleAdmin.id, permissionId: perm.id } }, update: {}, create: { roleId: roleAdmin.id, permissionId: perm.id } });
  await prisma.userRole.upsert({ where: { userId_roleId: { userId: admin.id, roleId: roleAdmin.id } }, update: {}, create: { userId: admin.id, roleId: roleAdmin.id } });
  await prisma.userRole.upsert({ where: { userId_roleId: { userId: user.id, roleId: roleUser.id } }, update: {}, create: { userId: user.id, roleId: roleUser.id } });
  await prisma.department.createMany({ data: [{ code: 'HR', name: 'Human Resources' }, { code: 'ENG', name: 'Engineering' }], skipDuplicates: true });
  await prisma.designation.createMany({ data: [{ code: 'SE', name: 'Software Engineer' }, { code: 'PM', name: 'Project Manager' }], skipDuplicates: true });
}

main().finally(() => prisma.$disconnect());
