module.exports = {
  siteMetadata: {
    title: `INK-MGMT`,
    description: `SITE META DESCRIPTION GOES HERE.`,
    siteUrl: `https://mikeriley.dev`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
