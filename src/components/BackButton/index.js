import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, theme } from '../../constants';

const BackButton = styled.a`
  color: ${colors.grayDefault};
  font-size: ${fontSizes.xxs}rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover, &:focus {
    .back-arrow {
      transform: translateX(-0.2rem);
    }
  }

  .back-arrow {
    width: 1rem;
    display: flex;
    align-items: center;
    transition: transform ${theme.transitionFast};

    svg {
      width: 100%;
    }
  }

  .label {
    font-weight:: 400;
    padding-left: 0.65rem;
  }
`;

const BackArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.494 31.494">
    <path
      d="M10.273 5.009a1.112 1.112 0 0 1 1.587 0 1.12 1.12 0 0 1 0 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 0 1-1.587 0L.321 16.532a1.12 1.12 0 0 1 0-1.571l9.952-9.952z"
      fill={colors.grayLight}
    />
  </svg>
);

export default ({ href, label }) => (
  <BackButton href={href}>
    <span className="back-arrow">
      <BackArrow />
    </span>
    <span className="label">{label}</span>
  </BackButton>
);
