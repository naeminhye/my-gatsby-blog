import React from "react"

import "./styles.scss"

const Tag = props => {
  const { children, prefix = "#" } = props

  return (
    <span className="tag">
      <span>
        {prefix}
        {children}
      </span>
    </span>
  )
}

export default Tag
