import styled from 'styled-components';
import './style.css';
import {
  fontSizes,
  breakpoints,
  theme
} from '../../constants';

export const GlobalStyles = styled.div `
  h1 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.xl.mobile}rem;

    @media screen and (min-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.xl.desktop}rem;
    }
  }

  h2 {
    margin: 0;
    color: ${theme.headingLight};
    font-size: ${fontSizes.xs.mobile}rem;

    @media screen and (min-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.xs.desktop}rem;
    }
  }

  h3 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.lg.mobile}rem;

    @media screen and (min-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.lg.desktop}rem;
    }
  }

  p {
    color: ${theme.paragraph};
    font-size: ${fontSizes.md.mobile}rem;

    @media screen and (min-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.md.desktop}rem;
    }
  }
`;