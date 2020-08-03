import React, { useState, useEffect } from 'react';
import { ContainerStyled, FormStyled } from './styled';
import InputText from '../../components/inputText';
import { changeValue } from '../../utils/util';
import { IValues, initialValues } from './model';

const Login: React.FC = () => {
  const [data, setData] = useState<IValues>(initialValues);

  function onChange(name: string, value: string): void {
    const newObj = changeValue<IValues>(data, name, value);
    setData(newObj);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ContainerStyled>
      <FormStyled>
        <img src="/assets/img/logo-fdp.jpg" alt="logo" />
        <form>
          <InputText name="username" label="Usuário" onChange={onChange} />
          <InputText name="password" label="Senha" onChange={onChange} />
        </form>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
