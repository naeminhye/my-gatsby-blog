/**
 * Configure your Gatsby site with this file.
 * with metadata for project title, description, plugins, etc.
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Demo`,
    description: `Blazing fast modern site generator for React by @jaceynae`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@posts": path.resolve(__dirname, "content/posts"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: ["js", "css", "scss"],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/contents/posts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
  ],
}
