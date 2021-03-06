import React, { FormEvent } from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './styled';

type types =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'danger'
  | 'warning'
  | 'link'
  | 'success';
interface IProps {
  type?: types;
  text?: string;
  className?: string;
  onClick(): void;
}

const Button: React.FC<IProps> = ({
  type,
  text,
  onClick,
  className,
  children,
}) => {
  function onClickButton(e: FormEvent): void {
    e.preventDefault();
    onClick();
  }

  return (
    <ContainerStyled
      className={`${type} ${className}`}
      onClick={e => onClickButton(e)}
    >
      {text}
      {children}
    </ContainerStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'warning',
    'success',
    'link',
  ]),
};

Button.defaultProps = {
  text: '',
  type: 'default',
  className: '',
};

export default Button;
