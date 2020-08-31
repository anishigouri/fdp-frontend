import { Dispatch } from 'redux';
import { showToast } from '../../components/notification';
import { IPilot } from '../../pages/admin/Pilot/model';
import api from '../../services/api';

type FetchPilotsAction = {
  type: 'FETCH_PILOTS' | 'FETCH_PILOT_BY_ID' | 'SAVE_PILOT';
  pilots?: IPilot[];
  pilot?: IPilot;
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
    case 'FETCH_PILOT_BY_ID': {
      return { ...state, pilot: action.pilot };
    }
    case 'SAVE_PILOT': {
      return { ...state, pilot: action.pilot };
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

export const fetchPilotById = (id: string) => (
  dispatch: Dispatch<FetchPilotsAction>,
): void => {
  api
    .get(`/pilots/${id}`)
    .then(res => {
      dispatch({
        type: 'FETCH_PILOT_BY_ID',
        pilot: res.data,
      });
    })
    .catch(err => {
      console.error('erro', err);
      showToast('error', 'Erro ao buscar piloto por id');
    });
};

export const savePilot = (data: IPilot) => (
  dispatch: Dispatch<FetchPilotsAction>,
): void => {
  if (data.id) {
    api
      .put(`/pilots/${data.id}`, data)
      .then(res => {
        showToast('success', 'Piloto salvo com sucesso!');
        dispatch({
          type: 'SAVE_PILOT',
          pilot: res.data,
        });
      })
      .catch(err => {
        console.error('erro', err);
        showToast('error', 'Erro ao salvar pilot');
      });
  } else {
    api
      .post(`/pilots`, data)
      .then(res => {
        showToast('success', 'Piloto salvo com sucesso!');
        dispatch({
          type: 'SAVE_PILOT',
          pilot: res.data,
        });
      })
      .catch(err => {
        console.error('erro', err);
        showToast('error', 'Erro ao salvar pilot');
      });
  }
};
