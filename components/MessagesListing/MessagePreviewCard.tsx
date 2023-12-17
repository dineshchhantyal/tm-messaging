import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface MessagePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  time: string;
  tag: string;
  message: string;
  profilePhoto: string;
}

const MessagePreviewCard = ({
  name,
  time,
  tag,
  message,
  profilePhoto,
  className,
  ...props
}: MessagePreviewCardProps) => {
  return (
    <div
      className={cn(
        'p-4 cursor-pointer rounded-md hover:bg-gray-100',
        className,
      )}
    >
      {/* header */}
      <div className="flex gap-3 items-center">
        {/* profile photo */}
        <img
          src={profilePhoto}
          alt={name}
          width={62}
          height={62}
          className="shadow-sm"
        />
        <div>
          {/* name */}
          <h3 className="font-bold text-lg">{name}</h3>
          {/* time */}
          <h5 className="text-gray-400 font-light">{time}</h5>
        </div>
      </div>
      {/* tag */}
      <div className="text-xs text-gray-300 py-3">{tag}</div>
      {/* message */}
      <p className="text-sm">
        {message.length > 50 ? message.substring(0, 50) + '...' : message}
      </p>
    </div>
  );
};

export default MessagePreviewCard;
