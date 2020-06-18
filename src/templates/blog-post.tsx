import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import FranceMapRR from "../components/blog/meteo-article/FranceMapRR"
import FranceMapNBJJRR from "../components/blog/meteo-article/FranceMapNBJJRR"
import FranceMapRRJOUR from "../components/blog/meteo-article/FRanceMapRRJOUR"
import Img from "gatsby-image"
import blogPostStyles from "./blog-post.module.css"
import typography from "../utils/typography"

const shortcodes = { FranceMapRR, FranceMapNBJJRR, FranceMapRRJOUR }
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

  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className={blogPostStyles.headerContainer}>
        <Img
          className={blogPostStyles.featuredImage}
          fluid={featuredImgFluid}
        />
        <div className={blogPostStyles.blogTitleContainer}>
          <h1
            className={blogPostStyles.blogTitle}
            style={{ ...typography.adjustFontSizeTo("54px") }}
          >
            {post.frontmatter.title}
          </h1>
          <h3>Par Sylvain Laugier</h3>
        </div>
        <p>{post.frontmatter.date}</p>
      </div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{post.body}</MDXRenderer>
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
