import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import meteoStyles from "./meteo.module.css"
import typography from "../utils/typography"
import MeteoTemplate from "./meteo"
import { PostNode } from "../types/blog"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMdx: {
      edges: {
        node: PostNode
      }[]
    }
  }
  pageContext: any
}

const BlogPostTemplate = ({ data }: Props) => {
  const posts = data.allMdx.edges.map(({ node }) => node)
  const mainPost = posts[0]
  const featuredImgFluid =
    mainPost.frontmatter.featuredImage.childImageSharp.fluid
  const siteTitle = data.site.siteMetadata.title
  const { title, description, author, date, template } = mainPost.frontmatter
  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title={title} description={description || mainPost.excerpt} />

      <div className={meteoStyles.headerContainer}>
        <Img className={meteoStyles.featuredImage} fluid={featuredImgFluid} />
        <div className={meteoStyles.blogHeaderContentContainer}>
          <div className={meteoStyles.blogTitleContainer}>
            <h1
              className={meteoStyles.blogTitle}
              style={{ ...typography.adjustFontSizeTo("54px") }}
            >
              {title}
            </h1>
            <div className={meteoStyles.titleDivider} />
            <div className={meteoStyles.descriptionContainer}>
              <p className={meteoStyles.description}>{description}</p>
              <p>par {author}</p>
            </div>
          </div>
        </div>
        <div className={meteoStyles.arrowContainer}>
          <svg
            className={meteoStyles.makeItBounce}
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

        <p>{date}</p>
      </div>
      {getTemplate(template, posts)}
    </Layout>
  )
}

function getTemplate(templateName: string, posts: PostNode[]): JSX.Element {
  if (templateName == "meteo") {
    return <MeteoTemplate posts={posts} />
  }

  return <></>
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($postId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___chapterIndex], order: ASC }
      filter: { frontmatter: { postId: { eq: $postId } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          body
          fileAbsolutePath
          frontmatter {
            postId
            title
            date(formatString: "MMMM DD, YYYY")
            description
            author
            chapterIndex
            template
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
    }
  }
`
