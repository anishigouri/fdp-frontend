import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styled';
import { dataModel } from '../../utils/modelUtil';

interface IProps {
  state: dataModel;
  label?: string;
  onChange(name: string, value: string): void;
}

const InputText: React.FC<IProps> = ({ state, label, onChange }) => {
  return (
    <ContainerStyled>
      <label htmlFor={state.name}>
        <input
          id={state.name}
          placeholder=" "
          maxLength={state.maxLength}
          value={state.value}
          onChange={e => onChange(state.name, e.target.value)}
        />
        <span className="label">{label}</span>
        <span className="focus-bg" />
      </label>
    </ContainerStyled>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    error: PropTypes.shape({
      hasError: PropTypes.bool.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: '',
};

export default InputText;
