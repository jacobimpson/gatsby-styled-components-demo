import React from 'react';
import styled from 'styled-components';
import { theme, fontSizes } from '../../constants';

const Button = styled.button`
  background-color: ${theme.primary};
  border-radius: 0.2rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${fontSizes.xxs}rem;
  font-weight: 500;
  min-width: 15rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
