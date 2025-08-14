'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps extends Omit<NextThemeProviderProps, 'children'> {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
