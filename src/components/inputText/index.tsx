import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styled';

interface IProps {
  name: string;
  label?: string;
  onChange(name: string, value: string): void;
}

const InputText: React.FC<IProps> = ({ name, label, onChange }) => {
  return (
    <ContainerStyled>
      <label htmlFor={name}>
        <input
          id={name}
          placeholder=" "
          onChange={e => onChange(name, e.target.value)}
        />
        <span className="label">{label}</span>
        <span className="focus-bg" />
      </label>
    </ContainerStyled>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: '',
};

export default InputText;
