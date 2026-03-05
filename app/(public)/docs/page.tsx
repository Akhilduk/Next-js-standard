import fs from 'node:fs/promises';
import path from 'node:path';
import Link from 'next/link';

type DocsPageProps = {
  searchParams?: Promise<{ file?: string }>;
};

type DocItem = { slug: string; title: string; content: string };

const DOCS_DIR = path.join(process.cwd(), 'docs');

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function inlineFormat(line: string) {
  return line
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-blue-700 underline" href="$2">$1</a>');
}

function renderMarkdown(md: string) {
  const lines = md.split(/\r?\n/);
  const headings: Array<{ id: string; text: string }> = [];
  const chunks: string[] = [];
  let inList = false;
  let inCode = false;

  const closeList = () => {
    if (inList) {
      chunks.push('</ul>');
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = escapeHtml(raw);
    if (line.startsWith('```')) {
      closeList();
      chunks.push(inCode ? '</code></pre>' : '<pre class="overflow-x-auto rounded-lg bg-slate-900 p-3 text-slate-100"><code>');
      inCode = !inCode;
      continue;
    }

    if (inCode) {
      chunks.push(`${line}\n`);
      continue;
    }

    if (line.startsWith('# ')) {
      closeList();
      const text = line.slice(2);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text });
      chunks.push(`<h1 id="${id}" class="mt-6 text-3xl font-bold text-slate-900 dark:text-slate-100">${inlineFormat(text)}</h1>`);
      continue;
    }

    if (line.startsWith('## ')) {
      closeList();
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text });
      chunks.push(`<h2 id="${id}" class="mt-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">${inlineFormat(text)}</h2>`);
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) {
      chunks.push('<ul class="my-3 list-disc space-y-1 pl-6 text-slate-700 dark:text-slate-300">');
        inList = true;
      }
      chunks.push(`<li>${inlineFormat(line.slice(2))}</li>`);
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    closeList();
    chunks.push(`<p class="my-3 leading-7 text-slate-700 dark:text-slate-300">${inlineFormat(line)}</p>`);
  }

  closeList();
  return { html: chunks.join(''), headings };
}

async function loadDocs() {
  const entries = await fs.readdir(DOCS_DIR);
  const markdownFiles = entries.filter((name) => name.endsWith('.md')).sort((a, b) => a.localeCompare(b));
  const docs = await Promise.all(
    markdownFiles.map(async (file) => {
      const content = await fs.readFile(path.join(DOCS_DIR, file), 'utf8');
      const slug = file.replace(/\.md$/, '');
      const title = content.split(/\r?\n/).find((line) => line.startsWith('# '))?.slice(2).trim() ?? slug;
      return { slug, title, content } satisfies DocItem;
    })
  );
  return docs;
}

export default async function DocsPage({ searchParams }: DocsPageProps) {
  const params = await searchParams;
  const docs = await loadDocs();
  const selected = docs.find((item) => item.slug === params?.file) ?? docs[0];
  if (!selected) {
    return <div className="rounded-lg border border-border bg-white p-6 dark:bg-slate-900">No documentation files found in `/docs`.</div>;
  }
  const rendered = renderMarkdown(selected.content);

  return (
    <section className="space-y-6 py-6">
      <div className="rounded-2xl border border-border bg-gradient-to-r from-slate-900 to-blue-900 p-6 text-white">
        <p className="text-sm uppercase tracking-wider text-blue-200">Documentation Center</p>
        <h1 className="mt-1 text-3xl font-bold">Project Docs</h1>
        <p className="mt-2 text-sm text-blue-100">Markdown-powered documentation from your local `/docs` folder.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr_240px]">
        <aside className="rounded-xl border border-border bg-white p-4 dark:bg-slate-900">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">All Documents</h2>
          <ul className="space-y-1">
            {docs.map((item) => {
              const active = item.slug === selected.slug;
              return (
                <li key={item.slug}>
                  <Link
                    href={`/docs?file=${encodeURIComponent(item.slug)}`}
                    className={`block rounded-md px-3 py-2 text-sm ${active ? 'bg-blue-50 font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <article className="rounded-xl border border-border bg-white p-6 dark:bg-slate-900">
          <div dangerouslySetInnerHTML={{ __html: rendered.html }} />
        </article>

        <aside className="rounded-xl border border-border bg-white p-4 dark:bg-slate-900">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Contents</h2>
          <ul className="space-y-1 text-sm">
            {rendered.headings.map((heading) => (
              <li key={heading.id}>
                <a className="text-slate-700 hover:underline dark:text-slate-300" href={`#${heading.id}`}>{heading.text}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
