import React from 'react';
import { Container, Aside, AsideContent } from './style';

const SideBar: React.FC = () => {
  return (
    <Container>
      <AsideContent>
        <Aside>a</Aside>
        <Aside>s</Aside>
        <Aside>a</Aside>
      </AsideContent>
    </Container>
  );
};

export default SideBar;
