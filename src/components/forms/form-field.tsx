import { ReactNode } from 'react';
import { FieldError } from '@/components/forms/field-error';

export function FormField({
  label,
  required,
  error,
  children
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {label} {required ? <span className="text-danger">*</span> : null}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}
