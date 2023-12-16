import { cn } from '@/lib/utils';

export default function IconButton({
  children,
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        `flex gap-2 p-4 rounded-full border border-gray-300 shadow-sm items-center
        hover:bg-gray-50 transition-colors duration-300 text-gray-700
        `,
        className?.toString(),
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}
