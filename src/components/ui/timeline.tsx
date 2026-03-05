import { CalendarIcon, CheckIcon } from '@/components/ui/icons';

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  completed?: boolean;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="relative rounded-lg border border-border bg-white p-3 pl-10 dark:bg-slate-900">
          <span className={`absolute left-3 top-3 inline-flex h-5 w-5 items-center justify-center rounded-full ${item.completed ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200'}`}>
            {item.completed ? <CheckIcon className="h-3.5 w-3.5" /> : <CalendarIcon className="h-3.5 w-3.5" />}
          </span>
          <p className="text-sm font-semibold">{item.title}</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">{item.description}</p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{item.timestamp}</p>
        </li>
      ))}
    </ol>
  );
}
