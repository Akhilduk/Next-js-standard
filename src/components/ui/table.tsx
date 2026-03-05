import { ReactNode } from 'react';

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 dark:bg-slate-900">
          <tr>{headers.map((h) => <th className="border-b border-border p-3 font-semibold" key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => <tr className="odd:bg-white even:bg-slate-50/40 dark:odd:bg-slate-950 dark:even:bg-slate-900/60" key={i}>{r.map((c, j) => <td className="border-b border-border p-3" key={j}>{c}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}
