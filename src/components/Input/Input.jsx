import React from 'react';
import { InputLeft, InputRight, InputWrapper } from './Input.styled';

const Input = () => {
  return (
    <>
      <label htmlFor="text"> Сar mileage / km</label>
      <label htmlFor="to"></label>
      <InputWrapper>
        <InputLeft name="from" type="text" placeholder="From" id="from" />{' '}
        <InputRight name="to" type="text" placeholder="To" id="to" />
      </InputWrapper>
    </>
  );
};

export default Input;
