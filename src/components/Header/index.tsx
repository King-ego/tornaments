import React from 'react';
import Container from '../Container';
import { HeaderContent, RedirectLink } from './style';
import BackgroundColor from '../BackgroundColor';

const Header: React.FC = () => {
  return (
    <BackgroundColor background="#000">
      <Container background="#2179ee">
        <HeaderContent>
          <RedirectLink to={'/'}>Menu de titulo</RedirectLink>
        </HeaderContent>
      </Container>
    </BackgroundColor>
  );
};

export default Header;
