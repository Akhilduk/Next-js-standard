export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-gradient-to-r from-slate-900 to-cyan-900 px-4 py-6 text-cyan-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Next.js Enterprise Boilerplate Demo</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="/docs">Docs</a>
          <a className="hover:underline" href="/components">Components</a>
          <a className="hover:underline" href="/sign-in">Auth</a>
        </div>
      </div>
    </footer>
  );
}
