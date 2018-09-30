import styled from 'styled-components';
import { breakpoints, theme } from '../../constants';

export const ProductBody = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;

  @media (min-width: ${breakpoints.desktop}px) {
    background: ${theme.bodyColor};
    align-items: center;
    padding: 2rem;
  }
`;

export const ProductContainer = styled.article`
  background: #fff;
  max-width: 100%;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 1256px;
    display: flex;
  }

  .product {
    &__back {
      padding: 2rem 2rem;

      @media (min-width: ${breakpoints.desktop}px) {
        padding: 2rem 4.5rem 2.3rem;
        margin-left: -0.2rem;
      }
    }

    &__title-wrapper {
      padding: 0 2rem;
      max-width: 90%;

      @media (min-width: ${breakpoints.desktop}px) {
        max-width: none;
        padding: 1rem 4.5rem;
      }
    }

    &__add-to-cart {
      border-top: 1px solid ${theme.borderColor};
      padding: 2rem 2rem;

      @media (min-width: ${breakpoints.desktop}px) {
        padding: 2.35rem 4.5rem;
      }
    }

    &__color-select {
      padding: 3rem 2rem 1rem 2rem;

      @media (min-width: ${breakpoints.desktop}px) {
        padding: 4rem 0 1.25rem 4.5rem;
      }
    }

    &__image-mobile {
      margin: 0 auto;
      display: block;
      padding: 0 2rem 2rem 2rem;
      width: 60%;
    }

    &__price-wrapper {
      padding-top: 1rem;
      padding-left: 2rem;

      @media (min-width: ${breakpoints.desktop}px) {
        padding-top: 0;
        padding-left: 4.5rem;
      }
    }

    &__column-left {
      background: #fff;

      @media (min-width: ${breakpoints.desktop}px) {
        max-width: 51.5%;
      }
    }

    &__column-right {
      @media (min-width: ${breakpoints.desktop}px) {
        align-items: center;
        border-left: 1px solid ${theme.borderColor};
        display: flex;
        flex-grow: 1;
        justify-content: center;
        position: relative;

        img {
          width: 70%;
        }
      }
    }
  }

  .react-tabs {
    &__tab-panel {
      padding: 1rem 2rem;

      @media (min-width: ${breakpoints.desktop}px) {
        padding: 1rem 4.5rem 1.9rem;
      }
    }

    &__tab-list {
      padding-left: 2rem;
      margin: 1.4rem 0 1rem 0;

      @media (min-width: ${breakpoints.desktop}px) {
        padding-left: 4.5rem;
      }
    }
  }
`;
