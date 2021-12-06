module.exports = {
  // pathPrefix: '/parliament', // removed for custom subdomain
  siteMetadata: {
    title: 'parliament',
    description: `it's parliament! check your election result predictions & see how many seats each party will get,
    or check out past parliaments & poll results`,
    author: 'me + you',
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177613845-1",
      },
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Fredericka the Great',
                variants: ['400'],
              },
              {
                family: 'Roboto Mono',
                variants: ['200', '400'],
              }
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    }
    // `gatsby-plugin-offline`,
  ],
}
