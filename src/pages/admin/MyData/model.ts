import * as Yup from 'yup';

export interface IMyData {
  id?: string;
  name: string;
  nickname?: string | null;
  photo?: string | null;
  photoHelmet?: string | null;
  celphone: string;
  birthdate: string;
}

export const initialValues: IMyData = {
  name: '',
  nickname: '',
  photo: '',
  photoHelmet: '',
  celphone: '',
  birthdate: '',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  celphone: Yup.string().required('Obrigatório'),
  birthdate: Yup.date().required('Obrigatório'),
});
