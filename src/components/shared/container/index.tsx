import { cn } from '@/lib/utils';
import type { FC } from 'react';
import type { IContainerProps } from './container.types';

export const Container: FC<React.PropsWithChildren<IContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px] px-4', className)}>
      {children}
    </div>
  );
};
