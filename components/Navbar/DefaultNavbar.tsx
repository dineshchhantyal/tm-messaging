import React from 'react';
import { Logo } from '../Header/Logo';
import DefaultNavbarLeft from '../Header/DefaultNavbarLeft';

const DefaultNavbar = () => {
  return (
    <div className="container mx-auto flex justify-between py-6 ">
      <Logo />
      <DefaultNavbarLeft />
    </div>
  );
};

export default DefaultNavbar;
