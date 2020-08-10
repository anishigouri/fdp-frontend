import { Dispatch } from 'redux';
import history from '../../history';
import { ILoginValues } from '../../pages/Login/model';
import api from '../../services/api';
import { showToast } from '../../components/notification';

interface ILogin {
  bearer: string;
}

type AccessLoginAction = {
  type: 'ACCESS_LOGIN';
  bearer: string;
};

export const loginReducer = (
  state: ILogin = { bearer: '' },
  action: AccessLoginAction,
): ILogin => {
  switch (action.type) {
    case 'ACCESS_LOGIN': {
      return { ...state, bearer: action.bearer };
    }
    default:
      return state;
  }
};

export const accessLogin = (data: ILoginValues) => (
  dispatch: Dispatch<AccessLoginAction>,
): void => {
  api
    .post('/sessions', data)
    .then(res => {
      showToast('success', 'Seja bem vindo!');
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: 'ACCESS_LOGIN',
        bearer: res.data.token,
      });
      history.push('/pilots');
    })
    .catch(err => {
      console.error('erro', err);
      showToast('error', 'Usuário ou senha inválidos');
    });
};
