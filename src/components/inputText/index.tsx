import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FormEvent } from 'react';
import { maskJs } from 'mask-js';

interface IProps {
  name: string;
  label?: string;
  value?: string | null;
  type?: string;
  textError: string | undefined;
  hasError: boolean;
  maxLength?: number;
  mask?: string;
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
  mask,
}) => {
  function changeValue(
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    if (mask) {
      const target = e.target as HTMLTextAreaElement | HTMLInputElement;
      target.value = maskJs(mask, target.value);
    }
    onChange(e);
  }
  return (
    <TextField
      fullWidth
      name={name}
      id={name}
      label={label}
      type={type}
      helperText={textError}
      error={hasError}
      onChange={changeValue}
      value={value}
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
  mask: PropTypes.string,
};

InputText.defaultProps = {
  label: '',
  maxLength: 50,
  textError: '',
  type: 'text',
  value: '',
  mask: '',
};

export default InputText;
