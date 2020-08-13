import React from 'react';
import { useFormik } from 'formik';
import { ContainerStyled, ButtonContainerStyled } from './styled';
import FormFields from '../../../../components/formFields';
import InputText from '../../../../components/inputText';
import { initialValues, validationSchema } from '../model';
import ButtonSubmit from '../../../../components/buttonSubmit';

const Pilot: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <FormFields title="Cadastro de pilotos">
      <ContainerStyled>
        <form onSubmit={formik.handleSubmit} className="row">
          <div className="col-12 col-sm-8">
            <InputText
              label="Nome"
              onChange={formik.handleChange}
              textError={formik.errors.name}
              hasError={!!formik.errors.name}
              name="name"
              value={formik.values.name}
            />
          </div>
          <div className="col-12 col-sm-4">
            <InputText
              label="Apelido"
              onChange={formik.handleChange}
              textError={formik.errors.nickname}
              hasError={!!formik.errors.nickname}
              name="nickname"
              value={formik.values.nickname}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputText
              label="E-mail"
              onChange={formik.handleChange}
              textError={formik.errors.email}
              hasError={!!formik.errors.email}
              name="email"
              value={formik.values.email}
            />
          </div>
          <div className="col-12 col-sm-3">
            <InputText
              label="Celular"
              onChange={formik.handleChange}
              textError={formik.errors.celphone}
              hasError={!!formik.errors.celphone}
              name="celphone"
              mask="(99)99999-9999"
              value={formik.values.celphone}
            />
          </div>
          <div className="col-12 col-sm-3">
            <InputText
              label="Nascimento"
              onChange={formik.handleChange}
              textError={formik.errors.birthdate}
              hasError={!!formik.errors.birthdate}
              name="birthdate"
              mask="99/99/9999"
              value={formik.values.birthdate}
            />
          </div>
          <hr />
          <ButtonContainerStyled>
            <ButtonSubmit type="primary" text="Salvar" />
          </ButtonContainerStyled>
        </form>
      </ContainerStyled>
    </FormFields>
  );
};

export default Pilot;
