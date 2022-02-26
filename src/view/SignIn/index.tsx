import React from 'react';
import {
  Container,
  Content,
  Input,
  Button,
  Title,
  InputContainer,
  SpanError,
} from './style';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

interface SignInputProps {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const validated = Yup.object().shape({
    user: Yup.string().trim().required('Campo Obrigatório'),
    password: Yup.string().trim().required('Campo Obrigatorio'),
  });
  const onSubmit = (value: SignInputProps) => {
    console.log({ password: value.password });
    console.log({ user: value.user });
  };
  return (
    <Container>
      <Content>
        <Formik
          validationSchema={validated}
          onSubmit={(values) => onSubmit(values)}
          initialValues={{ user: '', password: '' }}
        >
          {({ errors }) => (
            <Form>
              <Title>Tournament</Title>
              <InputContainer>
                <Input type="text" name="user" placeholder="email or user" />
                <SpanError>{errors.user}</SpanError>
              </InputContainer>
              <InputContainer>
                <Input type="password" name="password" placeholder="password" />
                <SpanError>{errors.password}</SpanError>
              </InputContainer>
              <Button className="hover" type="submit">
                Logar
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignIn;
