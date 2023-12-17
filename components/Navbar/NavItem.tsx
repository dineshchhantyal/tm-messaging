import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  title?: string;
  link: string;
  active?: boolean;
}

const NavItem = ({
  logo,
  title,
  className,
  children,
  link,
  active = false,
}: NavItemProps) => {
  return (
    <Link
      className={cn(
        'text-gray-400 p-5 cursor-pointer hover:text-gray-200 ',
        active ? 'text-white' : '',
        className ?? '',
      )}
      href={link}
    >
      {logo}
      <span className="hidden">{title}</span>
      {children}
    </Link>
  );
};

export default NavItem;
