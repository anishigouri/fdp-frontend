import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { FormContainerStyled } from './styled';

interface IProps {
  title?: string;
  children: ReactNode;
}

const FormFields: React.FC<IProps> = ({ children, title }) => {
  return (
    <FormContainerStyled>
      <h2>{title}</h2>
      {children}
    </FormContainerStyled>
  );
};

FormFields.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FormFields.defaultProps = {
  title: '',
};

export default FormFields;
