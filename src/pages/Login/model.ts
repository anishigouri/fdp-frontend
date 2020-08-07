import * as Yup from 'yup';

export interface ILoginValues {
  username: string;
  password: string;
}

export const initialValues: ILoginValues = {
  username: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Obrigatório'),
  password: Yup.string().required('Obrigatório'),
});
