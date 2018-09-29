import { fontSizes, breakpoints } from '../../constants';
import styled from 'styled-components';
import './style.css';

export const GlobalStyles = styled.div`
  h1 {
    font-size: ${fontSizes.xl.mobile}rem;
    @media screen and (max-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.xl.desktop}rem;
    }
  }

  h2 {
    font-size: ${fontSizes.sm.mobile}rem;
    @media screen and (max-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.sm.desktop}rem;
    }
  }

  h3 {
    font-size: ${fontSizes.lg.mobile}rem;
    @media screen and (max-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.lg.desktop}rem;
    }
  }

  p {
    font-size: ${fontSizes.md.mobile}rem;
    @media screen and (max-width: ${breakpoints.lg}px) {
      font-size: ${fontSizes.md.desktop}rem;
    }
  }
`;
