import styled from 'styled-components';
import { Field } from 'formik';
// interface InputProps {
//   mb?: string;
// }

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.grey10};
  padding: 12px;
`;

export const Content = styled.div`
  width: 300px;
  /* height: 300px; */
  /* border: 1px solid ${(props) => props.theme.colors.blue50};
  border-radius: 6px; */
`;

export const Input = styled(Field)`
  width: 100%;
  border: none;
  height: 38px;
  padding: 0 12px;
  background: transparent;
  border-radius: 6px;
`;

export const InputContainer = styled.div`
  margin-bottom: 32px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  background: ${(props) => props.theme.colors.white};
  /* box-shadow: 1px 1px 0px 0px ${(props) => props.theme.colors.blue40}; */
  border-radius: 6px;
  position: relative;
`;

export const SpanError = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;
  color: ${(props) => props.theme.colors.red};
`;

export const Button = styled.button`
  background: ${(props) => props.theme.secondaryColors.blue50};
  border: 1px solid ${(props) => props.theme.secondaryColors.blue50};
  color: ${(props) => props.theme.colors.grey10};
  width: 50%;
  height: 38px;
  padding: 0 11px;
  border-radius: 6px;

  &.hover:hover {
    background: ${(props) => props.theme.secondaryColors.blue40};
    border: 1px solid ${(props) => props.theme.secondaryColors.blue40};
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 32px;
`;
