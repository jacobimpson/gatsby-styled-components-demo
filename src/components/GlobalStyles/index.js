import styled from 'styled-components';
import { fontSizes, theme } from '../../constants';
import './style.css';

export default styled.div`
  h1 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.xl}rem;
  }

  h2 {
    margin: 0;
    color: ${theme.headingLight};
    font-size: ${fontSizes.xs}rem;
  }

  h3 {
    margin: 0;
    color: ${theme.heading};
    font-size: ${fontSizes.lg}rem;
  }

  p {
    color: ${theme.paragraph};
    font-size: ${fontSizes.md}rem;
  }
`;
