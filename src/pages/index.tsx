// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import homeStyles from "./home.module.css"

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
    <div className={homeStyles.mainContainer}>
      <SEO title={seoTitle} />
      <div className={homeStyles.punchLineContainer}>
        <h1 className={homeStyles.punchLine}>
          Hi, I'm Sylvain, I'm a creative full stack web developer
        </h1>
        <h2 className={homeStyles.punchLine}>
          I've been coding for 5 years, with 2 years as a professionnal
          developer
        </h2>
      </div>
    </div>
  )
}

export default HomePage
