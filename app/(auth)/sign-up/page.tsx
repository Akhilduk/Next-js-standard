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

type SignUpForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<SignUpForm>({
    defaultValues: {
      fullName: 'Demo User',
      email: 'demo@enterprise.local',
      password: 'Demo@12345Secure',
      confirmPassword: 'Demo@12345Secure'
    }
  });
  const password = watch('password') ?? '';

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Create Account</h1>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (values) => {
          setSubmitted(false);
          await new Promise((r) => setTimeout(r, 300));
          setSubmitted(true);
          window.localStorage.setItem('demo_registered_email', values.email);
          showToast({ kind: 'success', title: 'Registration complete', description: 'Demo account saved locally.' });
        })}
      >
        <Input
          placeholder="Full name"
          {...register('fullName', {
            required: validators.required('Full name').message,
            minLength: validators.minLength(2, 'Full name')
          })}
        />
        <FieldError message={errors.fullName?.message} />

        <Input
          placeholder="Work email"
          {...register('email', {
            required: validators.required('Email').message,
            pattern: validators.email()
          })}
        />
        <FieldError message={errors.email?.message} />

        <Input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: validators.required('Password').message,
            validate: validators.passwordPolicy
          })}
        />
        <PasswordPolicyChecklist password={password} />
        <FieldError message={errors.password?.message} />

        <Input
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: validators.required('Confirm password').message,
            validate: (value) => validators.confirmPassword(value, password)
          })}
        />
        <FieldError message={errors.confirmPassword?.message} />

        <Button disabled={isSubmitting} className="w-full bg-emerald-600">
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>
      {submitted ? <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">Demo account created successfully.</p> : null}
      <p className="text-sm text-slate-600">Already have an account? <Link className="text-blue-700 underline" href="/sign-in">Sign in</Link></p>
    </section>
  );
}
