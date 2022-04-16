import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: calc(100vh - 80px);
  width: 400px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Aside = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.secondaryColors.blue10};
  text-align: center;
  padding: 10px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.secondaryColors.blue10};
  }
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
