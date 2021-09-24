import React from "react"
import { Link } from "gatsby"

import Tag from "@components/basic/Tag"

import "./styles.scss"

const Post = ({
  title,
  description,
  author,
  date,
  tags = [],
  category,
  html,
}) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <span>{author}</span>
      <span>{date}</span>
      {tags.map(tag => (
        <Link to={`/tags/${tag}`}>
          <Tag>{tag}</Tag>
        </Link>
      ))}
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Post
