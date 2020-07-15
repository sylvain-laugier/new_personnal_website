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
import meteoStyles from "./meteo.module.css"
import typography, { sansSerifTypo } from "../utils/typography"
import { PostNode } from "../types/blog"

const shortcodes = {
  FranceMapRR,
  FranceMapNBJJRR,
  FranceMapRRJOUR,
  MeteoChapter,
}
interface MeteoTemplateProps {
  posts: PostNode[]
}

const MeteoTemplate = ({ posts }: MeteoTemplateProps) => {
  const firstChapter = getChapterIndexPost(posts, 1)
  return (
    <MDXProvider components={shortcodes}>
      <div className={meteoStyles.postBody}>
        <MDXRenderer>{posts[0].body}</MDXRenderer>
      </div>
      {firstChapter ? (
        <MeteoChapter>
          <MDXRenderer>{firstChapter.body}</MDXRenderer>
        </MeteoChapter>
      ) : (
        <></>
      )}
    </MDXProvider>
  )
}

function getChapterIndexPost(
  posts: PostNode[],
  index: number
): PostNode | undefined {
  return posts.find(post => post.frontmatter.chapterIndex === index)
}
export default MeteoTemplate
