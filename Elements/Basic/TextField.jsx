import React from 'react';
import { Input } from '@progress/kendo-react-inputs';

const TextField = ({
  type,
  label,
  placeholder,
  onChangeHandler = () => console.log('onChange Handler function'),
}) => {
  return (
    <Input
      onChange={onChangeHandler}
      type={type}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default TextField;
