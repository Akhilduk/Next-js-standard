'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordPolicyChecklist } from '@/components/auth/password-policy-checklist';
import { validators } from '@/lib/validation/rules';
import { FieldError } from '@/components/forms/field-error';
import { useToast } from '@/components/ui/toast-provider';

type ResetForm = {
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const [done, setDone] = useState(false);
  const { showToast } = useToast();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<ResetForm>({
    defaultValues: { password: 'Demo@12345Secure', confirmPassword: 'Demo@12345Secure' }
  });
  const password = watch('password') ?? '';

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Reset Password</h1>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async () => {
          setDone(false);
          await new Promise((r) => setTimeout(r, 300));
          setDone(true);
          showToast({ kind: 'success', title: 'Password updated', description: 'Demo reset completed.' });
        })}
      >
        <Input
          type="password"
          placeholder="New password"
          {...register('password', {
            required: validators.required('Password').message,
            validate: validators.passwordPolicy
          })}
        />
        <PasswordPolicyChecklist password={password} />
        <FieldError message={errors.password?.message} />

        <Input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword', {
            required: validators.required('Confirm password').message,
            validate: (value) => validators.confirmPassword(value, password)
          })}
        />
        <FieldError message={errors.confirmPassword?.message} />

        <Button disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Updating password...' : 'Update Password'}
        </Button>
      </form>
      {done ? <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">Password updated (demo flow).</p> : null}
      <p className="text-sm text-slate-600"><Link className="text-blue-700 underline" href="/sign-in">Back to sign in</Link></p>
    </section>
  );
}
