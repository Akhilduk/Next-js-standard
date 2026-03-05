import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="space-y-8 py-12">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-800 via-slate-800 to-cyan-900 p-10 text-white shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Enterprise Starter</p>
        <h1 className="mt-2 text-4xl font-bold">Next.js Standard Platform</h1>
        <p className="mt-3 max-w-2xl text-blue-100">
          End-to-end template with auth, RBAC modules, APIs, docs, and tracing-ready middleware.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard"><Button className="bg-cyan-600 hover:bg-cyan-500">Open Dashboard</Button></Link>
          <Link href="/docs"><Button className="bg-slate-700">Read Docs</Button></Link>
          <Link href="/sign-in"><Button className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-900">Sign In</Button></Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['All Pages Reachable', 'App routes are open for walkthrough and QA verification.'],
          ['Traceable Requests', 'Correlation ID is injected and displayed in the global top bar.'],
          ['Markdown Docs Hub', 'The /docs page loads local markdown files with sidebar and contents.']
        ].map(([title, body]) => (
          <article key={title} className="rounded-xl border border-border bg-white p-5 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
