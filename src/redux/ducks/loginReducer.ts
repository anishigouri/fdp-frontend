import { ILoginValues, initialValues } from '../../pages/Login/model';
import api from '../../services/api';

type Action = { type: 'ACCESS_LOGIN'; payload: string };

export const login = (
  state: ILoginValues = initialValues,
  action: Action,
): ILoginValues => {
  switch (action.type) {
    case 'ACCESS_LOGIN': {
      return { ...state };
    }
    default:
      return state;
  }
};

export const accessLogin = data: ILoginValues => {
  const menuQuery = api.post('/sessions', data);
};
