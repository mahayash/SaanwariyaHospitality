module.exports = {
  siteMetadata: {
    title: 'Saanwariya Hospitality',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/visitPlaces`,
        name: 'pages',
      },
    },
  ],
}
