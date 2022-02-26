import React from 'react';
import Container from '../Container';
import { HeaderContent } from './style';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Link to={'/'}>Menu de titulo</Link>
      </HeaderContent>
    </Container>
  );
};

export default Header;
