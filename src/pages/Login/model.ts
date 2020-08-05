import * as Yup from 'yup';

export interface IValues {
  username: string;
  password: string;
}

export const initialValues: IValues = {
  username: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Usuário obrigatório'),
});
