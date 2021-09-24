const path = require("path")

// Utilities
const kebabCase = require("lodash/kebabCase")

const createPages = async ({ graphql, actions: { createPage } }) => {
  // ----- create post pages
  const result = await graphql(`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              path
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postTemplate = path.resolve(`src/templates/post.js`)
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const tagTemplate = path.resolve(`src/templates/tag.js`)

  // Extract tag data from query
  result.data.tags.group.forEach(({ fieldValue }) => {
    createPage({
      path: `/tags/${kebabCase(fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    })
  })
}

module.exports = createPages
