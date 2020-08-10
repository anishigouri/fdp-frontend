import { Dispatch } from 'redux';
import { ILoginValues } from '../../pages/Login/model';
import api from '../../services/api';

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
  console.log('actionnnnn', action);
  switch (action.type) {
    case 'ACCESS_LOGIN': {
      console.log('stateeee', action.bearer);
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
      console.log('response', res);
      dispatch({
        type: 'ACCESS_LOGIN',
        bearer: 'iefieufhweiufhwefhiweu',
      });
    })
    .catch(err => {
      console.log('erro', err);
    });
};
