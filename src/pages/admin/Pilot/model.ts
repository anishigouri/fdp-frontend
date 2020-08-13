import * as Yup from 'yup';

export interface IPilot {
  name: string;
  nickname?: string;
  photo?: string;
  photoHelmet?: string;
  email: string;
  celphone: string;
  active: boolean;
  birthdate: string;
}

export const initialValues: IPilot = {
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
  birthdate: Yup.date().required('Obrigatório'),
});
