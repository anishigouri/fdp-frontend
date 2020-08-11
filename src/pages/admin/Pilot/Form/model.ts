import * as Yup from 'yup';

export interface ILoginValues {
  name: string;
  nickname?: string;
  photo?: string;
  photoHelmet?: string;
  email: string;
  celphone: string;
  active: boolean;
  birthdate: string;
}

export const initialValues: ILoginValues = {
  name: '',
  nickname: '',
  photo: '',
  photoHelmet: '',
  email: '',
  celphone: '',
  active: true,
  birthdate: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Obrigatório'),
  name: Yup.string().required('Obrigatório'),
  celphone: Yup.string().required('Obrigatório'),
  birthdate: Yup.string().required('Obrigatório'),
});
