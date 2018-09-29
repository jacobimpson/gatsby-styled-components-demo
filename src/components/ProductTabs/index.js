import { Tabs } from 'react-tabs';
import styled from 'styled-components';
import { fontSizes, theme, breakpoints } from '../../constants';

export default styled(Tabs)`
  .react-tabs {
    &__tab-list {
      margin: 1rem 0 1rem 0;
      display: flex;
      list-style-type: none;
      border-bottom: 1px solid ${theme.borderColor};
      padding-left: 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding-left: 3rem;
      }
    }

    &__tab {
      padding: 1rem 0.5rem;
      margin: 0 2rem 0 0;
      cursor: pointer;
      font-size: ${fontSizes.xxs}rem;
      text-transform: uppercase;
      font-weight: 500;

      &--selected {
        border-bottom: 0.2rem solid ${theme.primary};
      }
    }

    &__tab-panel {
      display: none;
      padding: 1rem 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 1rem 3rem;
      }

      &--selected {
        display: block;
      }
    }
  }
`;
