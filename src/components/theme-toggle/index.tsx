'use client';

import { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import cn from 'classnames';

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsAnimating(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (!mounted) {
    return (
      <button
        className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300',
        isAnimating && 'animate-pulse'
      )}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 flex items-center justify-center',
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        )}
      >
        <Sun
          className={cn(
            'w-3 h-3 text-yellow-500',
            theme === 'dark' ? 'opacity-0' : 'opacity-100'
          )}
        />
        <Moon
          className={cn(
            'w-3 h-3 text-blue-500 absolute',
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </button>
  );
};
