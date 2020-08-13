import { Dispatch } from 'redux';
import { showToast } from '../../components/notification';
import { IPilot } from '../../pages/admin/Pilot/model';
import api from '../../services/api';

type FetchPilotsAction = {
  type: 'FETCH_PILOTS';
  pilots: IPilot[];
};

export interface IPilotValues {
  pilot?: IPilot;
  pilots?: IPilot[];
}

export const pilotReducer = (
  state: IPilotValues = {},
  action: FetchPilotsAction,
): IPilotValues => {
  switch (action.type) {
    case 'FETCH_PILOTS': {
      return { ...state, pilots: action.pilots };
    }
    default:
      return { ...state };
  }
};

export const fetchPilots = () => (
  dispatch: Dispatch<FetchPilotsAction>,
): void => {
  api
    .get('/pilots')
    .then(res => {
      dispatch({
        type: 'FETCH_PILOTS',
        pilots: res.data,
      });
    })
    .catch(err => {
      console.error('erro', err);
      showToast('error', 'Erro ao buscar pilotos');
    });
};
