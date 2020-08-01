import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styled';

interface IProps {
  name: string;
  label?: string;
}

const InputText: React.FC<IProps> = ({ name, label }) => {
  return (
    <ContainerStyled>
      <label htmlFor={name}>{label}</label>
      <input id={name} />
    </ContainerStyled>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InputText.defaultProps = {
  label: '',
};

export default InputText;
