import React, { useState } from 'react';
import { ContainerStyled, FormStyled } from './styled';
import InputText from '../../components/inputText';
import { changeValue } from '../../utils/util';
import { IValues, initialValues } from './model';
import Button from '../../components/button';

const Login: React.FC = () => {
  const [data, setData] = useState<IValues>(initialValues);

  function onChange(name: string, value: string): void {
    const newObj = changeValue<IValues>(data, name, value);
    setData(newObj);
  }

  function onLogin(): void {
    console.log(data);
  }

  function forgotMyPassword(): void {
    console.log('esqueci minha senha');
  }

  return (
    <ContainerStyled>
      <FormStyled>
        <img src="/assets/img/logo-fdp.jpg" alt="logo" />
        <form>
          <InputText
            state={data.username}
            label="Usuário"
            onChange={onChange}
          />
          <InputText state={data.password} label="Senha" onChange={onChange} />
          <Button type="primary" text="Entrar" onClick={onLogin} />
          <Button type="default" text="Ir para o site" onClick={onLogin} />
          <a href="forgotMyPassword" onClick={forgotMyPassword}>
            Esqueci minha senha
          </a>
        </form>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
