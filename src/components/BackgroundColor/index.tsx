import React from 'react';

import { PropsContainer } from '../Container';

import { Content } from './style';

const LineColor: React.FC<PropsContainer> = ({ children, background }) => {
  return <Content background={background}>{children}</Content>;
};

export default LineColor;
