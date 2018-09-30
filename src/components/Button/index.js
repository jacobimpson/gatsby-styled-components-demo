import React from 'react';
import styled from 'styled-components';
import { theme, fontSizes } from '../../constants';

const IconLoading = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 50 50"
  >
    <path
      fill="#fff"
      d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      transform="rotate(348.488 25 25)"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const Button = styled.button`
  background-color: ${theme.primary};
  border-radius: 0.2rem;
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${fontSizes.xxs}rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  min-width: 14.5rem;
  padding: 1.35rem 2rem;
  text-transform: uppercase;
  transition: all ${theme.transitionDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    stroke: #fff;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    position: absolute;
    right: 1.5rem;
    z-index: 99;
  }

  > span {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.primaryDark};
  }
`;

export default ({ onClick, children, isLoading }) => {
  return (
    <Button onClick={onClick}>
      <span>
        {children}
        {isLoading && <IconLoading />}
      </span>
    </Button>
  );
};
