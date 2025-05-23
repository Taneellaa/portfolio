import type { FC } from 'react';
import { Container } from '../shared/container';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="rounded-lg shadow-xl p-8 font-[family-name:var(--font-geist-sans)]">
      <Container>
        <h2>{title}</h2>
      </Container>
    </header>
  );
};

export default Header;
