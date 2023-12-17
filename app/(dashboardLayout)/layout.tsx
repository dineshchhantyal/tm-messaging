import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Logo } from '@/components/Header/Logo';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={cn(inter.className, 'flex')}>
        <header className="shadow-sm h-screen w-32 bg-black">
          <Sidebar />
        </header>
        {children}
      </body>
    </html>
  );
}
