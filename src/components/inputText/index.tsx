import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FormEvent } from 'react';

interface IProps {
  name: string;
  label?: string;
  value: string;
  type: string;
  textError: string | undefined;
  hasError: boolean;
  maxLength?: number;
  onChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}

const InputText: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  textError,
  hasError,
  maxLength,
  type,
}) => {
  return (
    <TextField
      name={name}
      id={name}
      label={label}
      value={value}
      type={type}
      helperText={textError}
      error={hasError}
      onChange={e => onChange(e)}
      rowsMax={maxLength}
    />
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  textError: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: '',
  maxLength: 50,
  textError: '',
};

export default InputText;
