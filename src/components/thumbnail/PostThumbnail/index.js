import React from "react"
import { Link } from "gatsby"

import "./styles.scss"

const PostThumbnail = ({ date, path, title, author, tags, description }) => (
  <div className="post__item">
    <h2 className="post__item--title">
      <Link to={path}>{title}</Link>
    </h2>
    <div className="post__item--meta">
      <span className="post__item--meta-item">{author}</span>
      <span className="post__item--meta-item">{date}</span>
    </div>
    <Link to={path} className="post__item--read-more">
      Read More
    </Link>
  </div>
)
export default PostThumbnail
