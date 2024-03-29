import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar/Sidebar';
import { PlusSquare } from 'lucide-react';
import MessagesListing from '@/components/MessagesListing/MessagesListing';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
    <div className="pl-3 mt-5">
      <Link href={'/messages'} className="flex gap-20 pl-5">
        <h1 className="font-bold text-4xl tracking-wide">Messages</h1>
        <PlusSquare className="w-5 h-5 self-end text-gray-400 cursor-pointer hover:text-gray-500" />
      </Link>
      <section className="flex gap-5 mt-8">
        <MessagesListing />
        {children}
      </section>
    </div>
  );
}
