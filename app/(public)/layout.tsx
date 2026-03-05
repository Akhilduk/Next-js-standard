import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl p-6">{children}</div>;
}
