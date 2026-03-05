import { Card } from '@/components/ui/card';

export default function Page() {
  const toggles = [
    ['Email notifications', 'Enabled'],
    ['Slack alerts', 'Enabled'],
    ['Weekly summary', 'Disabled'],
    ['Strict session mode', 'Enabled']
  ];

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Card>
        <ul className="space-y-2">
          {toggles.map(([k, v]) => (
            <li key={k} className="flex items-center justify-between border-b border-border py-2 text-sm last:border-b-0">
              <span>{k}</span>
              <span className="rounded bg-muted px-2 py-1 font-semibold">{v}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
