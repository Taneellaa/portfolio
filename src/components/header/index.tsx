import type { FC } from 'react';
import { Container } from '../shared/container';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="rounded-lg shadow-xl py-8 font-[family-name:var(--font-geist-sans)]">
      <Container>
        <Link href="/">{title}</Link>
      </Container>
    </header>
  );
};

export default Header;
