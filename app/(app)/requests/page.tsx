import { Table } from '@/components/ui/table';

export default function Page() {
  const items = [
    { id: 'REQ-1001', title: 'Laptop Upgrade', status: 'Approved' },
    { id: 'REQ-1002', title: 'Access to Finance DB', status: 'In Review' },
    { id: 'REQ-1003', title: 'Travel Reimbursement', status: 'Created' }
  ];
  const rows = items.map((item) => [
    <span key={`${item.id}-id`} className="font-mono text-xs">{item.id}</span>,
    <span key={`${item.id}-title`}>{item.title}</span>,
    <span key={`${item.id}-status`}>{item.status}</span>,
    <a key={`${item.id}-link`} className="text-blue-700 underline" href={`/requests/${item.id}/tracking`}>Track</a>
  ]);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Requests</h1>
      <p className="text-sm text-slate-600">Request list with direct tracking links.</p>
      <Table headers={['Request ID', 'Title', 'Status', 'Tracking']} rows={rows} />
    </section>
  );
}
