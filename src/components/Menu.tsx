import React from "react"
import { Link } from "gatsby"
import MenuStyles from "./menu.module.css"
import ReactTooltip from "react-tooltip"

const Menu = () => {
  return (
    <>
      <nav className={MenuStyles.container}>
        <p className={MenuStyles.navLink} data-tip="Soon...">
          Le Blog
        </p>
        <Link className={MenuStyles.navLink} to="/">
          /
        </Link>
      </nav>
    </>
  )
}

export default Menu
