import React from 'react';

import { Content } from './style';

export interface PropsContainer {
  // use in the components <Container/> and <BackgroundColor/>
  background?: string;
}

const BackgroundColor: React.FC<PropsContainer> = (props) => {
  const { children, background } = props;
  return <Content background={background}>{children}</Content>;
};

export default BackgroundColor;
