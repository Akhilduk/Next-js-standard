import './globals.css';
import { ReactNode } from 'react';
import { TopBar } from '@/components/layouts/top-bar';
import { Footer } from '@/components/layouts/footer';
import { Providers } from '@/components/providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
