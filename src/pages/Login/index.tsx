import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import ButtonSubmit from '../../components/buttonSubmit';
import InputText from '../../components/inputText';
import { accessLogin } from '../../redux/ducks/login';
import { initialValues, validationSchema } from './model';
import { ContainerStyled, FormStyled } from './styled';

const LoginForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      dispatch(accessLogin(values, history));
    },
  });

  function onRedirect(): void {
    console.log('Redirecionando');
  }

  return (
    <ContainerStyled>
      <FormStyled>
        <img src="/assets/img/logo-fdp.jpg" alt="logo" />
        <form onSubmit={formik.handleSubmit}>
          <InputText
            label="Usuário"
            onChange={formik.handleChange}
            textError={formik.errors.email}
            hasError={!!formik.errors.email}
            name="email"
            value={formik.values.email}
          />

          <InputText
            label="Senha"
            onChange={formik.handleChange}
            type="password"
            textError={formik.errors.password}
            hasError={!!formik.errors.password}
            name="password"
            value={formik.values.password}
          />

          <ButtonSubmit type="primary" text="Entrar" />
          <Button type="default" text="Ir para o site" onClick={onRedirect} />
        </form>
      </FormStyled>
    </ContainerStyled>
  );
};

export default LoginForm;
