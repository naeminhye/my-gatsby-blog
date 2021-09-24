import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import PageLayout from "@components/layout/PageLayout"
import kebabCase from "lodash/kebabCase"

export default function Tags() {
  const {
    allMarkdownRemark: { group },
  } = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <PageLayout pageTitle="Posts">
      <h1>Tags </h1>
      <div>
        {group.map(tag => (
          <div key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue}
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
