import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../utils/util';
import FormFields from '../../../components/formFields';
import { ContainerStyled, ButtonContainerStyled } from './styled';
import InputText from '../../../components/inputText';
import { initialValues, IMyData, validationSchema } from './model';
import ButtonSubmit from '../../../components/buttonSubmit';
import { RootState } from '../../../redux/store/store';
import { fetchPilotById } from '../../../redux/ducks/pilot';

// import { Container } from './styles';

const MyData: React.FC = () => {
  const dispatch = useDispatch();

  const pilot = useSelector<RootState, IMyData | undefined>(state => {
    return state.pilotReducer.pilot;
  });

  useEffect(() => {
    const user = getUser();
    if (user && user.id) {
      dispatch(fetchPilotById(user.id));
    }
  }, [dispatch]);

  const { setValues, handleSubmit, errors, values, handleChange } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: myDataValue => {
      console.log(myDataValue);
      // dispatch(savePilot(pilotValue));
    },
  });

  useEffect(() => {
    if (pilot?.id) {
      setValues(pilot);
    }
  }, [pilot, setValues]);

  return (
    <FormFields title="Meus Dados">
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
            <ButtonSubmit type="primary" text="Salvar" />
          </ButtonContainerStyled>
        </form>
      </ContainerStyled>
    </FormFields>
  );
};

export default MyData;
