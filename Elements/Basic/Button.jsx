import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const Button = ({
  text = 'default text',
  onClick = () => console.log('default button'),
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
