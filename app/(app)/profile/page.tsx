import { Card } from '@/components/ui/card';

export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Basic Info</h2>
          <p className="mt-2 text-sm text-slate-600">Name: Demo Admin</p>
          <p className="text-sm text-slate-600">Email: admin@corp.com</p>
          <p className="text-sm text-slate-600">Department: Engineering</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Access Summary</h2>
          <p className="mt-2 text-sm text-slate-600">Roles: ADMIN, OPS_MANAGER</p>
          <p className="text-sm text-slate-600">MFA: Enabled</p>
          <p className="text-sm text-slate-600">Last Login: 2026-03-05 13:55</p>
        </Card>
      </div>
    </section>
  );
}
