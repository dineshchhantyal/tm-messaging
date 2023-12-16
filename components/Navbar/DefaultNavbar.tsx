import React from 'react';
import { Logo } from '../Header/Logo';
import DefaultNavbarLeft from '../Header/DefaultNavbarLeft';

const DefaultNavbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center gap-6 py-6 flex-col md:flex-row">
      <Logo />
      <DefaultNavbarLeft />
    </div>
  );
};

export default DefaultNavbar;
