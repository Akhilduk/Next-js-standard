'use client';

import { useMemo } from 'react';

export type MultiSelectOption = { value: string; label: string };

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Select options'
}: {
  options: MultiSelectOption[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  const selectedLabels = useMemo(() => options.filter((o) => value.includes(o.value)).map((o) => o.label), [options, value]);
  return (
    <div className="space-y-2 rounded-lg border border-border bg-white p-3 dark:bg-slate-900">
      <p className="text-sm text-slate-600 dark:text-slate-300">{selectedLabels.length ? selectedLabels.join(', ') : placeholder}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const checked = value.includes(option.value);
          return (
            <label key={option.value} className={`flex cursor-pointer items-center gap-2 rounded-md border px-2 py-1.5 text-sm ${checked ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' : 'border-border'}`}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(checked ? value.filter((v) => v !== option.value) : [...value, option.value])}
                className="h-4 w-4 accent-cyan-600"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}
