import React from "react"

import "./styles.scss"

const PostItem = ({ date, path, title }) => (
  <div>
    <span>{date}</span>
    <a href={path}>
      <h4>{title}</h4>
    </a>
  </div>
)
export default PostItem
