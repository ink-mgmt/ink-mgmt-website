module.exports = {
  siteMetadata: {
    title: `INK-MGMT`,
    description: `Meet the first creative talent management agency founded by Black (award winning) creatives.`,
    siteUrl: `https://www.inkmgmt.com/`,
    socialImage: `/social-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://admin.inkmgmt.com/graphql/',
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-133LPX9SSX', // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-accessibilityjs`,
    //   options: {
    //     injectStyles: false,
    //     errorClassName: false,
    //   },
    // },
  ],
};
