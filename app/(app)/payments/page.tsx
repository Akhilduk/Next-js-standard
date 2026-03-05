import { Card } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

export default function Page() {
  const rows = [
    ['PAY-9001', 'Stripe', 'Succeeded', '$4,200.00'],
    ['PAY-9002', 'Razorpay', 'Pending', '$1,100.00'],
    ['PAY-9003', 'Stripe', 'Failed', '$299.00']
  ].map((r) => r.map((v) => <span key={`${r[0]}-${v}`}>{v}</span>));

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Payments</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><p className="text-sm text-slate-500">Today Volume</p><p className="text-2xl font-bold">$9,320</p></Card>
        <Card><p className="text-sm text-slate-500">Settlement ETA</p><p className="text-2xl font-bold">T+1</p></Card>
        <Card><p className="text-sm text-slate-500">Failure Rate</p><p className="text-2xl font-bold">1.9%</p></Card>
      </div>
      <Table headers={['Payment ID', 'Gateway', 'Status', 'Amount']} rows={rows} />
    </section>
  );
}
