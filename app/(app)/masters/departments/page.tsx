import { prisma } from '@/lib/db/prisma';
import { Table } from '@/components/ui/table';

export default async function DepartmentsPage({ searchParams }: { searchParams: Promise<{ page?: string; pageSize?: string }> }) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);
  const pageSize = Number(params.pageSize ?? 10);
  const fallback = [
    { id: 'dep-1', code: 'ENG', name: 'Engineering' },
    { id: 'dep-2', code: 'OPS', name: 'Operations' }
  ];

  let items: Array<{ id: string; code: string; name: string }> = fallback;
  let source = 'sample';
  try {
    const dbItems = await prisma.department.findMany({ skip: (page - 1) * pageSize, take: pageSize });
    items = dbItems.map((dept: { id: string; code: string; name: string }) => dept);
    source = 'database';
  } catch {
    source = 'sample';
  }

  const rows = items.map((dept) => [<span key={dept.id}>{dept.code}</span>, <span key={`${dept.id}-n`}>{dept.name}</span>]);
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Departments</h1>
        <p className="text-sm text-slate-600">Data source: {source}</p>
      </div>
      <Table headers={['Code', 'Name']} rows={rows} />
    </div>
  );
}
