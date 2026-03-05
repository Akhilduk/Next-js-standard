'use client';

export function Switch({
  checked,
  onCheckedChange,
  label
}: {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full border border-border px-2 py-1 transition ${checked ? 'bg-cyan-600/15' : 'bg-slate-100 dark:bg-slate-800'}`}
    >
      <span className={`relative inline-flex h-6 w-11 rounded-full transition ${checked ? 'bg-cyan-600' : 'bg-slate-400'}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${checked ? 'left-[22px]' : 'left-0.5'}`} />
      </span>
      {label ? <span className="text-sm text-slate-700 dark:text-slate-200">{label}</span> : null}
    </button>
  );
}
