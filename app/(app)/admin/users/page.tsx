import { Table } from '@/components/ui/table';

export default function AdminUsersPage() {
  const rows = [
    ['admin@corp.com', 'ADMIN', 'Active'],
    ['ops@corp.com', 'OPS_MANAGER', 'Active'],
    ['analyst@corp.com', 'ANALYST', 'Invited']
  ].map((r) => r.map((v) => <span key={`${r[0]}-${v}`}>{v}</span>));
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Users</h1>
      <Table headers={['Email', 'Role', 'Status']} rows={rows} />
    </div>
  );
}
