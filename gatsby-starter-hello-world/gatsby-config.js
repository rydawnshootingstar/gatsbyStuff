/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Ryan Feller",
    title: "Hello 🌎",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        path: `${__dirname}/src/posts/`,
        // Plugins configs
        plugins: [],
      },
    },
    // delivers our own font files
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Merriweather"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // loads our posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
