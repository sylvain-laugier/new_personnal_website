import React from "react"
import { Link } from "gatsby"

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}

export default Nav
