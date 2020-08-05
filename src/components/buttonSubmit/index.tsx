import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styled';

type types =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'danger'
  | 'warning'
  | 'success';
interface IProps {
  type?: types;
  text: string;
}

const ButtonSubmit: React.FC<IProps> = ({ type, text }) => {
  return (
    <ContainerStyled className={type} type="submit">
      {text}
    </ContainerStyled>
  );
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
  ]),
};

ButtonSubmit.defaultProps = {
  type: 'default',
};

export default ButtonSubmit;
