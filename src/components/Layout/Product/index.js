import styled from 'styled-components';
import {
  breakpoints,
  theme
} from '../../../constants';

export const ProductBody = styled.main `
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${theme.bodyColor};

  @media (min-width: ${breakpoints.sm}px) {
    align-items: center;
    padding: 2rem;
  }
`;

export const ProductContainer = styled.article `
  background: #fff;

  @media (min-width: calc(${breakpoints.md}px)) {
    max-width: ${breakpoints.lg}px;
    display: flex;
  }

  .product {
    &__back {
      padding: 2rem 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 2rem 3rem;
      }
    }

    &__title-wrapper {
      padding: 0 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 1rem 3rem;
      }
    }

    &__add-to-cart {
      border-top: 1px solid ${theme.borderColor};
      padding: 2rem 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 2rem 3rem;
      }
    }

    &__color-select {
      padding: 3rem 0 1rem 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 4rem 0 1rem 3rem;
      }
    }

    &__price-wrapper {
      padding-left: 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding-left: 3rem;
      }
    }

    &__column-right {
        @media (min-width: ${breakpoints.md}px) {
          align-items: center;
          border-left: 1px solid ${theme.borderColor};
          display: flex;
          flex-shrink: 0;
          justify-content: center;
          padding: 2rem 4rem;
        }
      }
  }

  .react-tabs {
    &__tab-panel {
      padding: 1rem 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding: 1rem 3rem;
      }
    }

    &__tab-list {
      padding-left: 2rem;

      @media (min-width: ${breakpoints.md}px) {
        padding-left: 3rem;
      }
    }
  }
`;