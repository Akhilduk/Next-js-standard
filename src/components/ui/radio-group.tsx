'use client';

export type RadioOption = { value: string; label: string; helper?: string };

export function RadioGroup({
  name,
  value,
  onChange,
  options
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
}) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex cursor-pointer items-start gap-2 rounded-md border border-border bg-white p-3 dark:bg-slate-900">
          <input
            type="radio"
            name={name}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="mt-0.5 h-4 w-4 accent-cyan-600"
          />
          <span>
            <span className="block text-sm font-medium">{option.label}</span>
            {option.helper ? <span className="text-xs text-slate-500 dark:text-slate-300">{option.helper}</span> : null}
          </span>
        </label>
      ))}
    </div>
  );
}
