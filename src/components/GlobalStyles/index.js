import styled from 'styled-components';
import { fontSizes, theme, breakpoints } from '../../constants';
import './style.css';

export default styled.div`
  *::selection {
    background: ${theme.primary};
    color: #fff;
  }

  h1 {
    margin: 0;
    color: ${theme.heading};
    margin-bottom: 0.65rem;
    letter-spacing: -0.7px;
    font-weight: 600;
    font-size: ${fontSizes.xl * 0.9}rem;

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${fontSizes.xl}rem;
    }
  }

  h2 {
    margin: 0;
    color: ${theme.headingLight};
    font-size: ${fontSizes.xxs * 0.95}rem;
    font-weight: 600;
  }

  h3 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.lg}rem;
  }

  p {
    color: ${theme.paragraph};
    font-size: ${fontSizes.xxs}rem;
    line-height: 1.85;
  }
`;
