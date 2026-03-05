import { ChevronRightIcon, HomeIcon } from '@/components/ui/icons';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
      <HomeIcon className="h-4 w-4" />
      {items.map((item, idx) => (
        <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-1">
          <ChevronRightIcon className="h-3.5 w-3.5 opacity-70" />
          {item.href ? <a href={item.href} className="hover:underline">{item.label}</a> : <span className="font-semibold text-slate-900 dark:text-slate-100">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
