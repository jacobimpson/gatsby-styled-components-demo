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
    letter-spacing: 0.7px;
    font-weight: 600;
    font-size: ${fontSizes.lg}rem;

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: ${fontSizes.xl}rem;
    }
  }

  h2 {
    margin: 0;
    color: ${theme.headingLight};
    font-size: ${fontSizes.xs}rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  h3 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.lg}rem;
  }

  p {
    color: ${theme.paragraph};
    font-size: ${fontSizes.md}rem;
    line-height: 1.5;
  }
`;
