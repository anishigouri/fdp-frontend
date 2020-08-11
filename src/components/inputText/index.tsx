import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FormEvent } from 'react';

interface IProps {
  name: string;
  label?: string;
  value?: string;
  type?: string;
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
      fullWidth
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
  type: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  textError: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: '',
  maxLength: 50,
  textError: '',
  type: 'text',
  value: '',
};

export default InputText;
