import { Table } from '@/components/ui/table';

export default function DesignationsPage() {
  const rows = [
    ['D001', 'Senior Engineer', 'Technology'],
    ['D002', 'Operations Lead', 'Operations'],
    ['D003', 'Finance Analyst', 'Finance']
  ].map((r) => r.map((v) => <span key={`${r[0]}-${v}`}>{v}</span>));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Designations</h1>
      <p className="text-sm text-slate-600">Sample designation master records for CRUD scaffolding.</p>
      <Table headers={['Code', 'Designation', 'Department']} rows={rows} />
    </section>
  );
}
