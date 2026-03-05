export default async function TrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Tracking #{id}</h1>
      <ol className="space-y-3">
        {[
          ['Created', '2026-03-05 09:12'],
          ['In Review', '2026-03-05 10:03'],
          ['Approved', '2026-03-05 12:16']
        ].map(([state, ts]) => (
          <li key={state} className="rounded-lg border border-border bg-white p-3 dark:bg-slate-900">
            <p className="font-semibold">{state}</p>
            <p className="text-xs text-slate-500">{ts}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
