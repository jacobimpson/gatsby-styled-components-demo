import React from 'react';
import styled from 'styled-components';
import { fontSizes, theme, breakpoints } from '../../constants';

const PriceStrike = styled.div`
  margin-left: 1rem;

  p {
    color: ${theme.headingLight};
    font-size: ${fontSizes.lg}rem;
    font-weight: 500;
    margin: 0;
    line-height: 1;
  }
`;

const PriceRegular = styled.h3`
  line-height: 1;
`;

export const PriceWrapper = styled.div`
  display: flex;
  padding-left: 2rem;

  @media (min-width: ${breakpoints.md}px) {
    padding-left: 3rem;
  }
`;

export default ({ strike, value }) =>
  strike ? (
    <PriceStrike>
      <p>
        <strike>${value}</strike>
      </p>
    </PriceStrike>
  ) : (
    <PriceRegular>${value}</PriceRegular>
  );
