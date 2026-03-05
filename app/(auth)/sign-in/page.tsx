'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Form = { email: string; password: string };

export default function SignInPage() {
  const { register, handleSubmit } = useForm<Form>();
  return <form className="space-y-3" onSubmit={handleSubmit(async (v) => { await fetch('/api/auth/signin', { method: 'POST', body: JSON.stringify(v) }); location.href = '/dashboard'; })}><h1 className="text-2xl font-semibold">Sign In</h1><Input placeholder="Email" {...register('email')} /><Input type="password" placeholder="Password" {...register('password')} /><Button type="submit">Sign in</Button></form>;
}
