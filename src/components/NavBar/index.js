import React from "react"

import "./styles.scss"

const NavBar = () => (
  <header className="navbar">
    <div className="navbar__title navbar__item">My Gatsby Blogs</div>
    <div className="navbar__item">
      <a href="/">Home</a>
    </div>
    <div className="navbar__item">
      <a href="/about">About</a>
    </div>
    <div className="navbar__item">
      <a href="/contact">Contact</a>
    </div>
    <div className="navbar__item">
      <a href="/posts">Posts</a>
    </div>
  </header>
)
export default NavBar
