module.exports = {
  siteMetadata: {
    title: `INK-MGMT`,
    description: `Meet the first Black owned creative talent agency founded by Black (award winning) creatives.`,
    siteUrl: `https://www.inkmgmt.com/`,
    socialImage: `/social-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://35.87.145.69/graphql/',
        refetchInterval: 30,
        schema: {
          requestConcurrency: 10,
          timeout: 90000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
              maxFileSizeBytes: 100000000,
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'MabryProBlack',
            'MabryProBold',
            'MabryProLight',
            'MabryProMedium',
            'MabryProRegular',
            'SpaceMonoRegular',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `INK-MGMT`,
        short_name: `INK-MGMT`,
        start_url: `/`,
        background_color: `#0000f5`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/ink-mgmt-favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
  ],
};
