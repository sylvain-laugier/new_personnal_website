import { FluidObject } from "gatsby-image"

export interface PostNode {
  excerpt: string
  frontmatter: {
    title: string
    date: string
    description: string
    featuredImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    author: string
  }
  fields: {
    slug: string
  }
}
export type BlogData = {
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
