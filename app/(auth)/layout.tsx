import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-md p-8">{children}</div>;
}
