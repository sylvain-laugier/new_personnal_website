// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import blogStyles from "./blog.module.css"

import Layout from "../components/layout"
import ArticlePreviewer from "../components/blog/ArticlePreviewer"
import { BlogData } from "../types/blog"

const BlogIndex = ({ data, location }: PageProps<BlogData>) => {
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={"Le blog"}>
      <div className={blogStyles.container}>
        <h1 className={blogStyles.mainTitle}>Le Blog</h1>
        <div className={blogStyles.titleDivider} />
        {posts.map(({ node }, i) => (
          <ArticlePreviewer key={node.fields.slug} node={node} position={i} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { chapterIndex: { eq: 0 } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "fr")
            title
            description
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
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
