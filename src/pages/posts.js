import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageLayout from "@components/PageLayout"
import PostItem from "@components/PostItem"

export default function Posts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
            fields {
              path
            }
          }
        }
      }
    }
  `)

  console.log({ edges })
  return (
    <PageLayout pageTitle="Posts">
      <h1>Posts page</h1>
      <div>
        {edges.map(({ node: { id, exerpt, fields, frontmatter } }) => (
          <PostItem
            key={id}
            date={frontmatter.date}
            path={fields.path}
            title={frontmatter.title}
          />
        ))}
      </div>
    </PageLayout>
  )
}
