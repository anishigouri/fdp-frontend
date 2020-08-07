import * as Yup from 'yup';

export interface ILoginValues {
  email: string;
  password: string;
}

export const initialValues: ILoginValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Obrigatório'),
  password: Yup.string().required('Obrigatório'),
});
