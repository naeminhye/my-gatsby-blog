/**
 * Implement Gatsby’s Node.js APIs to customize
 * and extend default settings affecting the build process
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // ----- Posts -----
  // Processing markdown files
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `contents`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // create `path` field to store url
    createNodeField({
      node,
      name: `path`,
      value: `/posts${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve(`src/templates/post.js`)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: template,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
