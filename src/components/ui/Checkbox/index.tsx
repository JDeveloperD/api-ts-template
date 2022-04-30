import React, { FC } from 'react';

type CheckboxProps = {
  type: 'checkbox' | 'radio'
}

const Checkbox: FC<CheckboxProps> = ({ type, ...props }) => {
  return (
    <input type={type} {...props} />
  );
};

export default Checkbox;
