import { Card } from '@/components/ui/card';
import { SimpleLineChart } from '@/components/charts/simple-line';
import { Table } from '@/components/ui/table';

const data = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 7 },
  { name: 'Thu', value: 23 },
  { name: 'Fri', value: 27 },
  { name: 'Sat', value: 15 }
];

export default async function DashboardPage() {
  const rows = [
    ['Revenue API', 'Healthy', '120ms'],
    ['DB Cluster', 'Healthy', '35ms'],
    ['Queue Worker', 'Warning', '2 retries']
  ].map((r) => r.map((v) => <span key={`${r[0]}-${v}`}>{v}</span>));

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Revenue', '$128,420'],
          ['Users', '1,284'],
          ['Open Requests', '42']
        ].map(([k, v]) => (
          <Card key={k}>
            <p className="text-sm text-slate-500">{k}</p>
            <p className="text-2xl font-semibold">{v}</p>
          </Card>
        ))}
      </div>
      <Card><SimpleLineChart data={data} /></Card>
      <Table headers={['Service', 'Status', 'Latency']} rows={rows} />
    </section>
  );
}
