import MessageTab from '@/components/MessageTab/MessageTab';
import MessagesListing from '@/components/MessagesListing/MessagesListing';
import React from 'react';

const Messages = () => {
  return (
    <div className="flex">
      <MessagesListing />
      <MessageTab />
    </div>
  );
};

export default Messages;
