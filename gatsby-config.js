module.exports = {
  siteMetadata: {
    title: 'Gatsby Styled Components Demo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-styled-components-demo',
        short_name: 'gatsby-demo',
        start_url: '/',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components'
  ],
}