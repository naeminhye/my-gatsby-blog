import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageLayout from "@components/layout/PageLayout"
import PostItem from "@components/PostItem"

export default function Posts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              category
              tags
              author
            }
            fields {
              slug
              path
            }
          }
        }
      }
    }
  `)

  return (
    <PageLayout pageTitle="Posts">
      <h1>Posts page</h1>
      <div>
        {edges.map(({ node: { id, exerpt, fields, frontmatter } }) => (
          <PostItem key={id} path={fields.path} {...frontmatter} />
        ))}
      </div>
    </PageLayout>
  )
}
