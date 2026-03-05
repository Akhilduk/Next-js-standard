import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminOverview() {
  const cards = [
    { label: 'Users', value: '124', href: '/admin/users' },
    { label: 'Roles', value: '9', href: '/admin/roles' },
    { label: 'Audit Events (24h)', value: '318', href: '/admin/audit-logs' }
  ];

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin Overview</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.label}>
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-bold">{card.value}</p>
            <a href={card.href} className="mt-4 inline-block">
              <Button className="bg-slate-700">Open {card.label}</Button>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
