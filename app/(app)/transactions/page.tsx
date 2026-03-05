import { prisma } from '@/lib/db/prisma';

export default async function Transactions({ searchParams }: { searchParams: { page?: string; q?: string } }) {
  const page = Number(searchParams.page ?? 1);
  const items = await prisma.transaction.findMany({ skip: (page - 1) * 20, take: 20, orderBy: { createdAt: 'desc' } });
  return <div><h1 className='text-2xl font-semibold'>Transactions</h1><ul>{items.map((i)=><li key={i.id}>{i.reference} - {i.amount}</li>)}</ul></div>;
}
