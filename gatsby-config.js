/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Bonneville`,
    titleTemplate: `%s | A starter theme for Gatsby`,
    description: `A starter theme for Gatsby`,
    siteUrl: `https://bonneville.netlify.com`,
    image: `/images/color.jpg`,
    author: `Morgan Baker`,
    authorSite: `https://www.morganbaker.dev`,
    twitterUsername: `@bonneville`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com/in/morgan-baker-developer-inverness`,
    githubURL: `https://github.com/bagseye`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bonneville - Gatsby Starter Theme`,
        short_name: `Bonneville`,
        start_url: `/`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "ENTER YOUR GA TRACKING ID HERE",
        head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}
