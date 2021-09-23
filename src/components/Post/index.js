import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import PageLayout from "@components/PageLayout"

import "./styles.scss"

const Post = ({ title, description, author, date, tags, category, html }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <span>{author}</span>
      <span>{date}</span>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Post
