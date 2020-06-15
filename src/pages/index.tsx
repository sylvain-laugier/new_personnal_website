// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import homeStyles from "./home.module.css"

import SEO from "../components/seo"
import Hello from "../components/hello"
import SocialNetworks from "../components/SocialNetworks"
import Menu from "../components/Menu"
import Technologies from "../components/Technologies"

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
      <Menu />
      <Hello />
      <SEO title={seoTitle} />
      <div className={homeStyles.punchLineContainer}>
        <h1 className={`${homeStyles.punchLine} ${homeStyles.fadeInFromLeft}`}>
          I'm Sylvain, a creative full stack web developer
        </h1>
        <h3
          className={`${homeStyles.punchLineSecond} ${homeStyles.fadeInFromLeft}`}
        >
          I've been coding for 5 years, including 2 years as a professionnal
          developer. I like to make strongly design-oriented websites using
          cutting edge web technologies.
        </h3>
      </div>
      <Technologies />
      <SocialNetworks />
    </div>
  )
}

export default HomePage
