import React from 'react';
import styled from 'styled-components';
import { fontSizes, theme } from '../../constants';

const PriceStrike = styled.div`
  margin-left: 1rem;

  p {
    color: ${theme.headingLight};
    font-size: ${fontSizes.lg}rem;
    font-weight: 500;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export default ({ strike, value }) =>
  strike ? (
    <PriceStrike>
      <p>
        <strike>{value}</strike>
      </p>
    </PriceStrike>
  ) : (
    <h3>{value}</h3>
  );
