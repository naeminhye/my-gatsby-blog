/**
 * Implement Gatsby’s Node.js APIs to customize
 * and extend default settings affecting the build process
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
exports.onCreateNode = require("./gatsby/on-create-node")
exports.createPages = require("./gatsby/create-pages")
