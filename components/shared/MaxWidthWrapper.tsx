import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'max-w-screen-2xl mx-auto w-full px-3 md:px-4 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
