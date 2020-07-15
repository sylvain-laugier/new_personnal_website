import { FluidObject } from "gatsby-image"

export interface PostNode {
  excerpt: string
  body: any
  frontmatter: {
    postId: string
    chapterIndex: number
    template: string
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
