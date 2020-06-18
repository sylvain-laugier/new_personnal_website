import React from "react"
import { Link } from "gatsby"
import Menu from "./Menu"
import SEO from "./seo"
import LayoutStyles from "./layout.module.css"

interface Props {
  location: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  // @ts-ignore
  const rootPath = `${window.__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
      className={LayoutStyles.background}
    >
      <header>
        <Menu />
      </header>
      <SEO title={title} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
