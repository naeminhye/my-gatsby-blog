const { createFilePath } = require(`gatsby-source-filesystem`)

const onCreateNode = ({ node, getNode, actions }) => {
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

module.exports = onCreateNode
