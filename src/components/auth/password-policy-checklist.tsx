'use client';

import { getPasswordChecks } from '@/lib/security/password-policy';
import { CheckIcon, SettingsIcon, XIcon } from '@/components/ui/icons';

export function PasswordPolicyChecklist({ password }: { password: string }) {
  const checks = getPasswordChecks(password);
  const passed = checks.filter((c) => c.valid).length;
  const ratio = Math.round((passed / checks.length) * 100);
  const strength = ratio >= 100 ? 'Strong' : ratio >= 70 ? 'Medium' : 'Weak';

  return (
    <div className="rounded-xl border border-border bg-white p-3 text-sm dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100">
          <SettingsIcon className="h-4 w-4 text-cyan-600" />
          Password policy
        </p>
        <span className={strength === 'Strong' ? 'rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : strength === 'Medium' ? 'rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'}>
          {strength}
        </span>
      </div>

      <div className="mb-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className={strength === 'Strong' ? 'h-2 rounded-full bg-emerald-500' : strength === 'Medium' ? 'h-2 rounded-full bg-amber-500' : 'h-2 rounded-full bg-rose-500'}
          style={{ width: `${ratio}%` }}
        />
      </div>

      <ul className="grid gap-1 sm:grid-cols-2">
        {checks.map((check) => (
          <li key={check.key} className={`inline-flex items-center gap-2 rounded-md border px-2 py-1 ${check.valid ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-300' : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300'}`}>
            {check.valid ? <CheckIcon className="h-4 w-4" /> : <XIcon className="h-4 w-4" />}
            {check.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
