// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import homeStyles from "./home.module.css"

import SEO from "../components/seo"
import Hello from "../components/home/hello"
import SocialNetworks from "../components/home/SocialNetworks"
import Technologies from "../components/home/Technologies"
import Layout from "../components/layout"
import PortFolio from "../components/home/PortFolio"

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
  const siteTitle = "Sylvain Laugier - Full stack Web Developer"

  return (
    <Layout location={location} title={siteTitle}>
      <div className={homeStyles.mainContainer}>
        <div className={homeStyles.contentContainer}>
          <Hello />
          <div className={homeStyles.punchLineContainer}>
            <h1
              className={`${homeStyles.punchLine} ${homeStyles.fadeInFromLeft}`}
            >
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
          <PortFolio />
          <SocialNetworks />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
