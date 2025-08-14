import type { FC, HTMLAttributes } from 'react';
import { Container } from '../shared/container';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
type HeaderProps = HTMLAttributes<HTMLDivElement>;

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-background/50 backdrop-blur-md py-4 transition-all duration-300',
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center h-[40px]">
          <Image
            src="/logo.svg"
            width={120}
            height={40}
            alt="Логотип"
            className="hover:opacity-80 transition-opacity duration-200 object-contain"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-foreground hover:text-primary font-medium text-sm tracking-wide transition-colors duration-200"
          >
            Блог
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary font-medium text-sm tracking-wide transition-colors duration-200"
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Связаться
          </Link>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
