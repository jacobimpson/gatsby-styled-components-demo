import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { fontSizes, colors } from '../../constants';

const ColorSelectWrapper = styled.div`
  width: 10rem;
`;

const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;

  > span {
    font-weight: 600;
    font-size: ${fontSizes.xxs}rem;
    color: ${colors.grayDefault};
    margin-bottom: 0.5rem;
    display: block;
  }

  .react-select {
    * {
      color: ${colors.grayDefault};
    }

    &__control {
      background: #fff;
    }

    &__value-container {
      font-weight: 600;
      font-size: ${fontSizes.xxs}rem;
    }

    &__option {
      font-weight: 400;
      font-size: ${fontSizes.xxs}rem;

      &:hover,
      &:focus {
        background: ${colors.grayLighter};
      }

      &--is-focused,
      &--is-selected {
        background: #fff;
      }

      &--is-selected {
        font-weight: 600;
      }
    }

    &__indicator-separator {
      display: none;
    }
  }
`;

export default ({ options, value, onChange, defaultValue }) => {
  return (
    <ColorSelectWrapper>
      <Label htmlFor="color-select">
        <span>Colors</span>
        <Select
          className="react-select"
          classNamePrefix="react-select"
          defaultValue={defaultValue}
          id="color-select"
          isSearchable={false}
          onChange={onChange}
          options={options}
          value={value}
        />
      </Label>
    </ColorSelectWrapper>
  );
};
