import React from "react"

// Components
import { Link, graphql } from "gatsby"

import PageLayout from "@components/layout/PageLayout"
import PostThumbnail from "@components/thumbnail/PostThumbnail"

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <PageLayout pageTitle={`#${tag}`}>
      <h1>{tagHeader}</h1>
      <div>
        {edges.map(({ node: { id, fields, frontmatter } }) => (
          <PostThumbnail key={id} path={fields.path} {...frontmatter} />
        ))}
      </div>
      <Link to="/tags">all tags</Link>
    </PageLayout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            path
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            category
            tags
            author
          }
        }
      }
    }
  }
`
