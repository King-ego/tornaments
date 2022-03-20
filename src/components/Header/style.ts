import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContent = styled.header`
  /* background: #0d0d2e; */
  height: 80px;
  display: flex;
  align-items: center;
`;

export const RedirectLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
`;
