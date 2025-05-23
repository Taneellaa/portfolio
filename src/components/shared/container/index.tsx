import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface ContainerProps {
  className?: string;
}

export const Container: FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  );
};
