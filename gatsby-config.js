module.exports = {
  pathPrefix: '/parliament',
  siteMetadata: {
    title: `parliament`,
    description: `it's parliament`,
    author: `me + you`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Fredericka the Great`,
              fontDisplay: 'block',
              strategy: 'selfHosted'
            },
            {
              family: `Roboto Mono`,
              variants: [`200`, `400`],
              fontDisplay: 'block',
              strategy: 'selfHosted'
            }
          ]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `parliament`,
        short_name: `parliament`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/svg/beehive-favicon.svg`,
      },
    },
    'custom-mui-theme',
    // `gatsby-plugin-offline`,
  ],
}
