import { Card } from '@/components/ui/card';

export default function RolesPage() {
  const roles = [
    { name: 'ADMIN', perms: ['users:*', 'roles:*', 'audit:read'] },
    { name: 'OPS_MANAGER', perms: ['requests:approve', 'payments:read', 'transactions:read'] },
    { name: 'ANALYST', perms: ['dashboard:read', 'transactions:read'] }
  ];

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Roles</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <Card key={role.name}>
            <h2 className="text-lg font-semibold">{role.name}</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {role.perms.map((perm) => <li key={perm}>{perm}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
