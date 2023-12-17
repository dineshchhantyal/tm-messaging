import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MessagePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  time: string;
  tag: string;
  message: string;
  profilePhoto: string;
  userId: string;
}

const MessagePreviewCard = ({
  name,
  time,
  tag,
  message,
  profilePhoto,
  className,
  userId,
  ...props
}: MessagePreviewCardProps) => {
  return (
    <Link href={`/messages/${userId}`} passHref>
      <div
        className={cn(
          'p-4 cursor-pointer rounded-md hover:bg-gray-100',
          className,
        )}
        {...props}
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
          {message.length > 58 ? message.substring(0, 50) + '...' : message}
        </p>
      </div>
    </Link>
  );
};

export default MessagePreviewCard;
