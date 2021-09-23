import React from "react"
import { graphql } from "gatsby"

import PageLayout from "@components/PageLayout"
import Post from "@components/Post"

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data

  return (
    <PageLayout pageTitle={markdownRemark.frontmatter.title}>
      <Post html={markdownRemark.html} {...markdownRemark.frontmatter} />
    </PageLayout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      wordCount {
        words
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
`

export default PostTemplate
