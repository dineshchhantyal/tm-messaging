import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Logo } from '@/components/Header/Logo';

export const metadata: Metadata = {
  title: 'Tramona: Messages',
  description: 'Tramona: Messages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="shadow-sm h-screen w-32 bg-black">
          <Sidebar />
        </header>
        {children}
      </body>
    </html>
  );
}
