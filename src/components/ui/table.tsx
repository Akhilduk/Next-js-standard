import { ReactNode } from 'react';

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr>{headers.map((h) => <th className="border-b p-2" key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td className="border-b p-2" key={j}>{c}</td>)}</tr>)}
      </tbody>
    </table>
  );
}
