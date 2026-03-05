export const PERMISSIONS = {
  MASTER_DEPT_READ: 'masters:department:read',
  MASTER_DEPT_WRITE: 'masters:department:write',
  ADMIN_USERS_READ: 'admin:users:read',
  ADMIN_USERS_WRITE: 'admin:users:write',
  ADMIN_ROLES_WRITE: 'admin:roles:write',
  AUDIT_READ: 'admin:audit:read'
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
