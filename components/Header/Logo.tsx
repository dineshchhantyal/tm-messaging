import { cn } from '@/lib/utils';
import React from 'react';

interface LogoProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <h1
      className={cn('font-bold text-2xl tracking-wide', className ?? '')}
      {...props}
    >
      Tramona
    </h1>
  );
};
