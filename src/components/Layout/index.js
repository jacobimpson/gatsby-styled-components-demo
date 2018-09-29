import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { breakpoints, theme } from '../../constants';
import GlobalStyles from '../GlobalStyles';

export const Body = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${theme.bodyColor};

  @media (min-width: ${breakpoints.sm}px) {
    align-items: center;
    padding: 2rem;
  }
`;

export const ProductContainer = styled.article`
  background: #fff;
  padding: 2rem;

  @media (min-width: calc(${breakpoints.md}px + 2rem)) {
    max-width: ${breakpoints.md}px;
  }
`;

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GlobalStyles>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        {children}
      </GlobalStyles>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
