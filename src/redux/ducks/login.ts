import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { ILoginValues } from '../../pages/Login/model';
import { RootState } from '../store/store';
import api from '../../services/api';

interface ILogin {
  bearer: string;
}

type ActionType = {
  type: 'ACCESS_LOGIN';
  payload: object;
};

export const loginReducer = (
  state: ILogin = { bearer: '' },
  action: ActionType,
): ILogin => {
  console.log('oioioioioioi');
  switch (action.type) {
    case 'ACCESS_LOGIN': {
      console.log('stateeee', state.bearer);
      return { ...state, bearer: state.bearer };
    }
    default:
      return state;
  }
};

export const accessLogin = (
  data: ILoginValues,
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
  const response = await api.post('/sessions', data);
  console.log('response', response.data);
  dispatch({
    type: 'ACCESS_LOGIN',
    payload: response.data,
  });
};
