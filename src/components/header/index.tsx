import type { FC, HTMLAttributes } from 'react';
import { Container } from '../shared/container';
import cn from 'classnames';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className="rounded-lg shadow-xl py-8 font-[family-name:var(--font-geist-sans)] bg-white">
      <Container className={cn(className, 'flex justify-between items-center')}>
        <Link className="text-black" href="/">
          <Image src={'/logo.svg'} width={200} height={200} alt={''} />
        </Link>
        <Link className="text-black" href="/blog">
          Блог
        </Link>
      </Container>
    </header>
  );
};

export default Header;
