import React from 'react';
import models from '../../../src/makes.json';
import { SelectView } from './Select.styled';

const Select = ({ type = 'Car brand' }) => {
  let options = [];

  if (type === 'Car brand') {
    options = models.map((model, index) => (
      <option key={index} value={model}>
        {model}
      </option>
    ));
  } else if (type === 'Price/ 1 hour') {
    for (let i = 0; i <= 500; i += 10) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
  }

  return (
    <>
      <label htmlFor={type}>{type}</label>
      <SelectView id={type} name={type}>
        {options}
      </SelectView>
    </>
  );
};

export default Select;
