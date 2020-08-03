import React, { FormEvent } from 'react';
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
  onClick(): void;
}

const Button: React.FC<IProps> = ({ type, text, onClick }) => {
  function onClickButton(e: FormEvent): void {
    e.preventDefault();
    onClick();
  }

  return (
    <ContainerStyled className={type} onClick={e => onClickButton(e)}>
      {text}
    </ContainerStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
  ]),
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
