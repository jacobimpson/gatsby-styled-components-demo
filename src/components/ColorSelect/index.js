import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { fontSizes, breakpoints } from '../../constants';

const ColorSelectWrapper = styled.div`
  padding: 3rem 0 1rem 2rem;
  width: 12rem;

  @media (min-width: ${breakpoints.md}px) {
    padding: 3rem 0 1rem 3rem;
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;

  > span {
    font-weight: 500;
    font-size: ${fontSizes.xxs}rem;
    margin-bottom: 0.5rem;
    display: block;
  }
`;

export default ({ options, value, onChange, defaultValue }) => {
  return (
    <ColorSelectWrapper>
      <Label htmlFor="color-select">
        <span> Colors </span>
        <Select
          id="color-select"
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          options={options}
        />
      </Label>
    </ColorSelectWrapper>
  );
};
