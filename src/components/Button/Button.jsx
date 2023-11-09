import React from 'react';
import { ButtonView } from './Button.styled';

const Button = ({ children }) => {
  return <ButtonView type="button">{children}</ButtonView>;
};

export default Button;
