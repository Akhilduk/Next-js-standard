'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FieldError } from '@/components/forms/field-error';
import { validators } from '@/lib/validation/rules';
import { useToast } from '@/components/ui/toast-provider';

type Form = { email: string; password: string };
const DEMO_USER = { email: 'demo@enterprise.local', password: 'Demo@12345' };

export default function SignInPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ defaultValues: DEMO_USER });

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(async (v) => {
        try {
          let apiSignedIn = false;
          try {
            const res = await fetch('/api/auth/signin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(v)
            });
            if (res.ok) apiSignedIn = true;
          } catch {}

          if (!apiSignedIn) {
            const isDemoMatch = v.email.toLowerCase() === DEMO_USER.email && v.password === DEMO_USER.password;
            if (!isDemoMatch) {
              showToast({
                kind: 'error',
                title: 'Sign in failed',
                description: 'Invalid credentials. Use demo@enterprise.local / Demo@12345'
              });
              return;
            }
            window.localStorage.setItem('demo_session', '1');
            document.cookie = `session=demo-session; path=/; max-age=${60 * 60 * 8}`;
          }
          showToast({ kind: 'success', title: 'Signed in successfully' });
          router.push('/dashboard');
        } catch {
          showToast({ kind: 'error', title: 'Sign in failed', description: 'Unexpected error occurred.' });
        } 
      })}
    >
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <p className="text-sm text-slate-600">
        Demo credentials prefilled. Values are posted in request body only.
      </p>
      <p className="rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs text-cyan-800">
        Demo login: <span className="font-semibold">demo@enterprise.local / Demo@12345</span>
      </p>
      <Input
        placeholder="Email"
        autoComplete="email"
        {...register('email', { required: validators.required('Email').message, pattern: validators.email() })}
      />
      <FieldError message={errors.email?.message} />
      <Input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        {...register('password', { required: validators.required('Password').message })}
      />
      <FieldError message={errors.password?.message} />
      <Button disabled={isSubmitting} type="submit" className="w-full">
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
}
