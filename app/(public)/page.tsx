import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return <section className="space-y-6 py-20"><h1 className="text-4xl font-bold">Enterprise Next.js Boilerplate</h1><p>Production-ready template with auth, RBAC, modules, and docs.</p><div className="flex gap-3"><Link href="/sign-in"><Button>Sign In</Button></Link><Link href="/docs"><Button className="bg-slate-700">Docs</Button></Link></div></section>;
}
