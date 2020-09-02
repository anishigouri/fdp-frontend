import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { MdDelete, MdEdit } from 'react-icons/md';
import FormFields from '../../../../components/formFields';
import { fetchPilots } from '../../../../redux/ducks/pilot';
import { RootState } from '../../../../redux/store/store';
import { IPilot } from '../model';

// import { Container } from './styles';

const PilotList: React.FC = () => {
  const dispatch = useDispatch();

  const pilots = useSelector<RootState, IPilot[] | undefined>(state => {
    return state.pilotReducer.pilots;
  });

  useEffect(() => {
    dispatch(fetchPilots());
  }, [dispatch]);

  const onDelete = (id: string | undefined): void => {
    console.log(id);
  };

  return (
    <FormFields title="Lista de pilotos">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Nome</td>
            <td>E-mail</td>
            <td>Celular</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          {pilots &&
            pilots.map(pilot => (
              <tr key={pilot.email}>
                <td>{pilot.name}</td>
                <td>{pilot.email}</td>
                <td>{pilot.celphone}</td>
                <td>
                  <Link to={`/admin/pilots/${pilot.id}`}>
                    <IconButton>
                      <MdEdit />
                    </IconButton>
                  </Link>
                </td>
                <td>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => onDelete(pilot.id)}
                    edge="start"
                  >
                    <MdDelete />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </FormFields>
  );
};

export default PilotList;
