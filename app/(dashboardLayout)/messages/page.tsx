import IconButton from '@/components/Button/IconButton';
import MessageTab from '@/components/MessageTab/MessageTab';
import MessagesListing from '@/components/MessagesListing/MessagesListing';
import { PlusSquare } from 'lucide-react';
import React from 'react';

const Messages = () => {
  return (
    <div className="pl-3 mt-5">
      <div className="flex gap-20 pl-5">
        <h1 className="font-bold text-4xl tracking-wide">Messages</h1>
        <PlusSquare className="w-5 h-5 self-end text-gray-400 cursor-pointer hover:text-gray-500" />
      </div>
      <section className="flex gap-5 mt-8">
        <MessagesListing />
        <MessageTab />
      </section>
    </div>
  );
};

export default Messages;
