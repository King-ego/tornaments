import React from 'react';
import Container from '../Container';
import { HeaderContent } from './style';
import { Link } from 'react-router-dom';
import BackgroundColor from '../BackgroundColor';

const Header: React.FC = () => {
  return (
    <BackgroundColor background="#2179ee">
      <Container>
        <HeaderContent>
          <Link to={'/'}>Menu de titulo</Link>
        </HeaderContent>
      </Container>
    </BackgroundColor>
  );
};

export default Header;
