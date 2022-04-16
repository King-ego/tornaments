import React from 'react';
import { Container, Aside, AsideContent } from './style';

const SideBar: React.FC = () => {
  const Alert = (txt: string) => {
    alert(txt);
  };
  return (
    <Container>
      <AsideContent>
        <Aside onClick={() => Alert('a')}>a</Aside>
        <Aside onClick={() => Alert('s')}>s</Aside>
        <Aside onClick={() => Alert('d')}>d</Aside>
      </AsideContent>
    </Container>
  );
};

export default SideBar;
