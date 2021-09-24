import React from "react"
import { Link } from "gatsby"

import "./styles.scss"

const NavBar = ({ title }) => (
  <header className="navbar">
    <div className="navbar__title navbar__item">{title}</div>
    <div className="navbar__item">
      <Link to="/">Home</Link>
    </div>
    <div className="navbar__item">
      <Link to="/about">About</Link>
    </div>
    <div className="navbar__item">
      <Link to="/posts">Posts</Link>
    </div>
    <div className="navbar__item">
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)
export default NavBar
