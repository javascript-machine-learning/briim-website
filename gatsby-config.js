const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-65599459-9';

module.exports = {
  siteMetadata: {
    title: 'BRIIM',
    description: 'A Machine Learning in JavaScript Movement',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
