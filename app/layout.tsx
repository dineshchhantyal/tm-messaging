import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DefaultNavbar from '@/components/Navbar/DefaultNavbar';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tramona',
  description: 'Tramona: A Next.js starter template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <header className="border-b-2 border-[rgba(0,0,0,0.25)] shadow-sm">
          <DefaultNavbar />
        </header>
        {/* <Sidebar /> */}
        {children}
      </body>
    </html>
  );
}
