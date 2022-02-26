import styled from 'styled-components';

export const HeaderContent = styled.header`
  /* background: #0d0d2e; */
  height: 80px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.blue};
`;
