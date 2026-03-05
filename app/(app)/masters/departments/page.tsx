import { prisma } from '@/lib/db/prisma';
import { Table } from '@/components/ui/table';

export default async function DepartmentsPage({ searchParams }: { searchParams: { page?: string; pageSize?: string } }) {
  const page = Number(searchParams.page ?? 1);
  const pageSize = Number(searchParams.pageSize ?? 10);
  const items = await prisma.department.findMany({ skip: (page - 1) * pageSize, take: pageSize });
  const rows = items.map((d) => [<span key={d.id}>{d.code}</span>, <span key={`${d.id}-n`}>{d.name}</span>]);
  return <div className='space-y-4'><h1 className='text-2xl font-semibold'>Departments</h1><Table headers={['Code','Name']} rows={rows} /></div>;
}
