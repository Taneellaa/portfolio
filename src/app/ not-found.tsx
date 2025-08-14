import { Container } from '@/components/shared/container';
import React from 'react';

interface Props {
  className?: string;
}

const NotFound: React.FC<Props> = ({ className }) => {
  return <Container className={className}>БРО, ТЫ КУДА ВАЩЕ ПОПАЛ</Container>;
};

export default NotFound;
