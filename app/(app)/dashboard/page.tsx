import { Card } from '@/components/ui/card';
import { SimpleLineChart } from '@/components/charts/simple-line';

const data = [{ name: 'Mon', value: 12 }, { name: 'Tue', value: 19 }, { name: 'Wed', value: 7 }, { name: 'Thu', value: 23 }];

export default async function DashboardPage() {
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Dashboard</h1><div className="grid grid-cols-3 gap-4">{['Revenue','Users','Requests'].map((k)=><Card key={k}><p className="text-sm text-gray-500">{k}</p><p className="text-2xl font-semibold">128</p></Card>)}</div><Card><SimpleLineChart data={data} /></Card></div>;
}
