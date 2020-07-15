import React from "react"
import { Link } from "gatsby"
import MenuStyles from "./menu.module.css"

const Menu = () => {
  return (
    <>
      <nav className={MenuStyles.container}>
        <Link className={MenuStyles.navLink} to="/blog">
          le blog
        </Link>
        <Link className={MenuStyles.navLink} to="/">
          /
        </Link>
      </nav>
    </>
  )
}

export default Menu
