import React, { FC, InputHTMLAttributes } from 'react';
import Label from '../Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string,
  label?: string,
  required?: boolean,
  error?: string,
  type: 'text' | 'date' | 'number' | 'password' | 'email'
}

const Input: FC<InputProps> = ({ type, label, id, required, error, ...props }) => {
  return (
    <>
      {label && (
        <Label text={label} htmlFor={id} required={required} />
      )}
      <input
        id={id}
        type={type}
        className={`form-control${error ? ' is-invalid' : ''}`}
        {...props}
      />
      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
    </>
  );
};

export default Input;
