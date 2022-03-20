import React from 'react';
import { Content } from './style';

export interface PropsContainer {
  // use in the components <Container/> and <BackgroundColor/>
  background?: string;
  position?: string;
}

const Container: React.FC<PropsContainer> = (props) => {
  const { children, background, position } = props;
  return (
    <Content position={position} background={background}>
      {children}
    </Content>
  );
};

export default Container;
