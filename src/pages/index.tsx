// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const seoTitle = "sylvain's awesome website"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

function HomePage({ location }: PageProps<Data>) {
  const pageQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = pageQuery.site.siteMetadata.title

  return (
    <div>
      <SEO title={seoTitle} />
      <div>the home page</div>
    </div>
  )
}

export default HomePage
