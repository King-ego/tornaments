import styled from 'styled-components';
import { PropsContainer } from './';

export const Content = styled.div<PropsContainer>`
  background: ${({ background }) => (background ? background : 'transparent')};
`;
