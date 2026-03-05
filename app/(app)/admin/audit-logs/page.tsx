import { Table } from '@/components/ui/table';

export default function AuditPage() {
  const rows = [
    ['2026-03-05 14:12', 'admin@corp.com', 'USER.UPDATE', 'user_901'],
    ['2026-03-05 14:03', 'admin@corp.com', 'ROLE.CREATE', 'role_manager'],
    ['2026-03-05 13:57', 'ops@corp.com', 'REQUEST.APPROVE', 'req_1204']
  ].map((r) => r.map((v) => <span key={`${r[0]}-${v}`} className="text-sm">{v}</span>));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Audit Logs</h1>
      <p className="text-sm text-slate-600">Sample audit stream with actor, action, and entity traceability.</p>
      <Table headers={['Timestamp', 'Actor', 'Action', 'Entity']} rows={rows} />
    </section>
  );
}
