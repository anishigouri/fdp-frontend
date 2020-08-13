import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormFields from '../../../../components/formFields';
import { fetchPilots } from '../../../../redux/ducks/pilot';
import { RootState } from '../../../../redux/store/store';
import { IPilot } from '../model';

// import { Container } from './styles';

const PilotList: React.FC = () => {
  const dispatch = useDispatch();

  const pilots = useSelector<RootState, IPilot[] | undefined>(state => {
    console.log('stateeee', state);
    return state.pilotReducer.pilots;
  });

  useEffect(() => {
    dispatch(fetchPilots());
  }, [dispatch]);

  useEffect(() => {
    console.log(pilots);
  }, [pilots]);

  return (
    <FormFields title="Lista de pilotos">
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Celular</td>
          </tr>
        </thead>
        <tbody>
          {pilots &&
            pilots.map(pilot => (
              <tr key={pilot.email}>
                <td>{pilot.name}</td>
                <td>{pilot.email}</td>
                <td>{pilot.celphone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </FormFields>
  );
};

export default PilotList;
