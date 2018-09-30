import { Tabs } from 'react-tabs';
import styled from 'styled-components';
import { fontSizes, theme, colors } from '../../constants';

export default styled(Tabs)`
  .react-tabs {
    &__tab-list {
      display: flex;
      list-style-type: none;
      border-bottom: 1px solid ${theme.borderColor};
    }

    &__tab {
      color: ${colors.grayLight};
      cursor: pointer;
      font-size: ${fontSizes.xxs}rem;
      font-weight: 600;
      margin: 0 2rem 0 0;
      padding: 1rem 0.55rem 0.7rem;
      text-transform: uppercase;
      transition: color ${theme.transitionDefault};
      border-bottom: 0.2rem solid transparent;

      &:hover,
      &:focus {
        color: ${colors.grayDefault};
      }

      &--selected {
        border-bottom: 0.2rem solid ${theme.primary};
        color: ${colors.grayDefault};
      }
    }

    &__tab-panel {
      display: none;
      padding-bottom: 2.1rem;

      &--selected {
        display: block;

        *:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
