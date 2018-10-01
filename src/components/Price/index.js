import React from 'react';
import styled from 'styled-components';
import { fontSizes, theme } from '../../constants';

const PriceStrike = styled.div`
  padding-left: 1.45rem;
  color: ${theme.headingLight};
  font-size: ${fontSizes.lg}rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
`;

const PriceRegular = styled.h3`
  line-height: 1;
`;

export const PriceWrapper = styled.div`
  display: flex;
  letter-spacing: -2px;
`;

export default ({ strike, value }) =>
  strike ? (
    <PriceStrike>
      <strike>${value}</strike>
    </PriceStrike>
  ) : (
    <PriceRegular>${value}</PriceRegular>
  );
