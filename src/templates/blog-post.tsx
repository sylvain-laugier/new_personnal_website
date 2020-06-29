import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import FranceMapRR from "../components/blog/meteo-article/FranceMapRR"
import FranceMapNBJJRR from "../components/blog/meteo-article/FranceMapNBJJRR"
import FranceMapRRJOUR from "../components/blog/meteo-article/FRanceMapRRJOUR"
import MeteoChapter from "../components/blog/meteo-article/MeteoChapter"
import Img from "gatsby-image"
import blogPostStyles from "./blog-post.module.css"
import typography, { sansSerifTypo } from "../utils/typography"

const shortcodes = {
  FranceMapRR,
  FranceMapNBJJRR,
  FranceMapRRJOUR,
  MeteoChapter,
}
interface Props {
  data: {
    mdx: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  pageContext: any
}

const BlogPostTemplate = ({ data }: Props) => {
  const post = data.mdx
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author, date } = post.frontmatter
  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} />

      <div className={blogPostStyles.headerContainer}>
        <Img
          className={blogPostStyles.featuredImage}
          fluid={featuredImgFluid}
        />
        <div className={blogPostStyles.blogHeaderContentContainer}>
          <div className={blogPostStyles.blogTitleContainer}>
            <h1
              className={blogPostStyles.blogTitle}
              style={{ ...typography.adjustFontSizeTo("54px") }}
            >
              {title}
            </h1>
            <div className={blogPostStyles.titleDivider} />
            <div className={blogPostStyles.descriptionContainer}>
              <p className={blogPostStyles.description}>{description}</p>
              <p>par {author}</p>
            </div>
          </div>
        </div>
        <div className={blogPostStyles.arrowContainer}>
          <svg
            className={blogPostStyles.makeItBounce}
            version="1.1"
            viewBox="0 0 64 64"
            width="64px"
            height="64px"
          >
            <g>
              <line x1="9" y1="23" x2="33" y2="40.7"></line>
              <line x1="53.9" y1="23" x2="30" y2="40.7"></line>
            </g>
          </svg>
        </div>

        <p>{post.frontmatter.date}</p>
      </div>
      <MDXProvider components={shortcodes}>
        <div className={blogPostStyles.postBody}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </MDXProvider>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
