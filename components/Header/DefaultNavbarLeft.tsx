import { BarChart3, MapPin, Menu, StarIcon } from 'lucide-react';
import React from 'react';
import IconButton from '../Button/IconButton';
import Image from 'next/image';

const DefaultNavbarLeft = () => {
  return (
    <div className="flex gap-5 items-center flex-col md:flex-row">
      {/* Location */}
      <MapPin className="h-5 w-5 hover:text-gray-600 cursor-pointer" />

      {/* Refer & Earn */}
      <IconButton
        className=""
        icon={<StarIcon className="h-5 w-5" fill="black" />}
      >
        <span>Refer & Earn</span>
      </IconButton>

      {/* More & More */}
      <IconButton
        className=""
        icon={
          <Image
            src={'/boy-logo.svg'}
            alt="boy"
            width={'20'}
            height={'20'}
            className="gap-8"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </IconButton>
    </div>
  );
};

export default DefaultNavbarLeft;
