import { Container } from '@/components/shared/container';
import type { FC } from 'react';
interface Props {
  className?: string;
}

const BlogPage: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>Это страница блога братуха</Container>
  );
};

export default BlogPage;
