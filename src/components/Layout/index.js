import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import GlobalStyles from '../GlobalStyles';

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
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </GlobalStyles>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
