import React from 'react';
import { ContainerStyled, FormStyled } from './styled';
import InputText from '../../components/inputText';

const Login: React.FC = () => {
  return (
    <ContainerStyled>
      <FormStyled>
        <img src="/assets/img/logo-fdp.jpg" alt="logo" />
        <form>
          <InputText name="username" label="Usuário" />
          <InputText name="password" label="Senha" />
        </form>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
