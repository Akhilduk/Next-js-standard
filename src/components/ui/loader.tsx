import { LoaderIcon } from '@/components/ui/icons';

export function Loader({ label = 'Loading', size = 'md' }: { label?: string; size?: 'sm' | 'md' | 'lg' }) {
  const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-8 w-8' : 'h-6 w-6';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 dark:bg-slate-900">
      <LoaderIcon className={`${iconSize} animate-spin text-cyan-600`} />
      <span className={`${textSize} text-slate-600 dark:text-slate-300`}>{label}</span>
    </div>
  );
}
