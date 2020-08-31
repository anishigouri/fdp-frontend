import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Button from '../../../../components/button';
import ButtonSubmit from '../../../../components/buttonSubmit';
import FormFields from '../../../../components/formFields';
import InputText from '../../../../components/inputText';
import { fetchPilotById, savePilot } from '../../../../redux/ducks/pilot';
import { RootState } from '../../../../redux/store/store';
import { initialValues, IPilot, validationSchema } from '../model';
import { ButtonContainerStyled, ContainerStyled } from './styled';

type Props = {
  id: string;
};

const Pilot: React.FC = () => {
  const history = useHistory();
  const route = useRouteMatch<Props>();
  const dispatch = useDispatch();

  const pilot = useSelector<RootState, IPilot | undefined>(state => {
    return state.pilotReducer.pilot;
  });

  useEffect(() => {
    const { id } = route.params;
    if (id && id !== '0') {
      dispatch(fetchPilotById(id));
    }
  }, [route.params, dispatch]);

  const { setValues, handleSubmit, errors, values, handleChange } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: pilotValue => {
      dispatch(savePilot(pilotValue));
    },
  });

  useEffect(() => {
    if (pilot?.id) {
      setValues(pilot);
    }
  }, [pilot, setValues]);

  return (
    <FormFields title="Cadastro de pilotos">
      <ContainerStyled>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-12 col-sm-8">
            <InputText
              label="Nome"
              onChange={handleChange}
              textError={errors.name}
              hasError={!!errors.name}
              name="name"
              value={values.name}
            />
          </div>
          <div className="col-12 col-sm-4">
            <InputText
              label="Apelido"
              onChange={handleChange}
              textError={errors.nickname}
              hasError={!!errors.nickname}
              name="nickname"
              value={values.nickname}
            />
          </div>
          <div className="col-12 col-sm-6">
            <InputText
              label="E-mail"
              onChange={handleChange}
              textError={errors.email}
              hasError={!!errors.email}
              name="email"
              value={values.email}
            />
          </div>
          <div className="col-12 col-sm-3">
            <InputText
              label="Celular"
              onChange={handleChange}
              textError={errors.celphone}
              hasError={!!errors.celphone}
              name="celphone"
              mask="(99)99999-9999"
              value={values.celphone}
            />
          </div>
          <div className="col-12 col-sm-3">
            <InputText
              label="Nascimento"
              onChange={handleChange}
              textError={errors.birthdate}
              hasError={!!errors.birthdate}
              name="birthdate"
              mask="99/99/9999"
              value={values.birthdate}
            />
          </div>
          <hr />
          <ButtonContainerStyled>
            <Button
              className="mr-2"
              type="default"
              text="Voltar"
              onClick={() => history.push('/admin/pilots')}
            />

            <ButtonSubmit type="primary" text="Salvar" />
          </ButtonContainerStyled>
        </form>
      </ContainerStyled>
    </FormFields>
  );
};

export default Pilot;
