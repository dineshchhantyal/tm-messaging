'use client';

import Image from 'next/image';
import React from 'react';
import { Logo } from '../Header/Logo';
import NavItem from '../Navbar/NavItem';
import {
  GitPullRequestArrow,
  Layers3Icon,
  LayoutDashboard,
  List,
  MessageSquareMore,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="border-white flex flex-col items-center">
      <div className="p-7 border-b-2 w-full grid place-items-center">
        <Image
          alt="Homepage"
          src={'/logo.png'}
          height={'40'}
          width={'38'}
        ></Image>
        <Logo className="text-white hidden" />
      </div>
      {/* nav */}

      <div className="flex flex-col items-center">
        {navItems.map((item) => (
          <NavItem
            logo={item.logo}
            title={item.title}
            active={pathname.includes(item.link)}
            link={item.link}
            key={item.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;

const navItems = [
  {
    logo: <LayoutDashboard className="w-7 h-7" />,
    title: 'Dashboard',
    link: 'dashboard',
  },
  {
    logo: <GitPullRequestArrow className="w-7 h-7" />,
    title: 'Incoming Requests',
    link: 'incoming-requests',
  },
  {
    logo: <List className="w-7 h-7" />,
    title: 'Your Listings',
    link: 'listings',
  },
  {
    logo: <MessageSquareMore className="w-7 h-7" />,
    title: 'Messaging',
    link: 'messages',
  },
  {
    logo: <Layers3Icon className="w-7 h-7" />,
    title: 'Resource/ How To',
    link: 'resources',
  },
  {
    logo: <Settings className="w-7 h-7" />,
    title: 'Settings',
    link: 'settings',
  },
];
