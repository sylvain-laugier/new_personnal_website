import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles404 from "./404.module.css"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout
      location={typeof window !== `undefined` ? window.location : undefined}
      title={siteTitle}
    >
      <SEO title="404: Not Found" />
      <div className={styles404.container}>
        <div>
          <h1>404</h1>
          <h2>This is not the page you're looking for</h2>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
