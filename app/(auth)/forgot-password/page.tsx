'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { validators } from '@/lib/validation/rules';
import { FieldError } from '@/components/forms/field-error';
import { useToast } from '@/components/ui/toast-provider';

type ForgotForm = { email: string };

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotForm>({
    defaultValues: { email: 'demo@enterprise.local' }
  });

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Forgot Password</h1>
      <p className="text-sm text-slate-600">Enter your email to receive a reset link.</p>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async ({ email }) => {
          setSubmitted(false);
          await new Promise((r) => setTimeout(r, 300));
          setSubmitted(true);
          showToast({ kind: 'info', title: 'Reset link sent', description: `Demo link generated for ${email}` });
        })}
      >
        <Input
          placeholder="name@company.com"
          {...register('email', { required: validators.required('Email').message, pattern: validators.email() })}
        />
        <FieldError message={errors.email?.message} />
        <Button disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
      {submitted ? <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">Check your inbox for the reset link (demo).</p> : null}
      <p className="text-sm text-slate-600"><Link className="text-blue-700 underline" href="/sign-in">Back to sign in</Link></p>
    </section>
  );
}
