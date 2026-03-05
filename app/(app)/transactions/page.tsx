import { prisma } from '@/lib/db/prisma';
import { Table } from '@/components/ui/table';

export default async function Transactions({ searchParams }: { searchParams: Promise<{ page?: string; q?: string }> }) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);
  const fallback = [
    { id: 'sample-1', reference: 'TXN-DEMO-1001', amount: 1200.5, createdAt: new Date() },
    { id: 'sample-2', reference: 'TXN-DEMO-1002', amount: 499.0, createdAt: new Date() }
  ];

  let items: Array<{ id: string; reference: string; amount: number; createdAt: Date }> = fallback;
  let source = 'sample';
  try {
    const dbItems = await prisma.transaction.findMany({ skip: (page - 1) * 20, take: 20, orderBy: { createdAt: 'desc' } });
    items = dbItems.map((item) => ({
      id: item.id,
      reference: item.reference,
      amount: Number(item.amount),
      createdAt: item.createdAt
    }));
    source = 'database';
  } catch {
    source = 'sample';
  }

  const rows = items.map((item) => [
    <span key={`${item.id}-ref`} className="font-mono text-xs">{item.reference}</span>,
    <span key={`${item.id}-amt`}>{item.amount}</span>,
    <span key={`${item.id}-ts`}>{item.createdAt.toLocaleString()}</span>
  ]);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <p className="text-sm text-slate-600">Data source: {source}</p>
      </div>
      <Table headers={['Reference', 'Amount', 'Created']} rows={rows} />
    </div>
  );
}
