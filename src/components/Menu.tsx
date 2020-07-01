import React from "react"
import { Link } from "gatsby"
import MenuStyles from "./menu.module.css"

const Menu = () => {
  return (
    <>
      <nav className={MenuStyles.container}>
        <div className={MenuStyles.tooltipped}>
          <p className={MenuStyles.navLink}>Le Blog</p>
          <span className={MenuStyles.tooltiptext}>soon...</span>
        </div>
        <Link className={MenuStyles.navLink} to="/">
          /
        </Link>
      </nav>
    </>
  )
}

export default Menu
