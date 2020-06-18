import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import articlePreviewerStyles from "./articlePreviewer.module.css"
import typography from "../../utils/typography"
import { PostNode } from "../../types/blog"

interface ArticlePreviewerProps {
  node: PostNode
  position: number
}

const ArticlePreviewer = ({ node, position }: ArticlePreviewerProps) => {
  const featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
  const { date, title, description, author } = node.frontmatter
  return (
    <div
      className={`${articlePreviewerStyles.container} ${articlePreviewerStyles.fadeInFromLeft}`}
      style={{ animationDelay: `${0.8 + position * 0.5}s` }}
    >
      <Link to={node.fields.slug}>
        <div className={articlePreviewerStyles.contentContainer}>
          <h3
            style={{ ...typography.adjustFontSizeTo("42px") }}
            className={articlePreviewerStyles.title}
          >
            {title}
          </h3>
          <div className={articlePreviewerStyles.titleSubdivider}></div>
          <div className={articlePreviewerStyles.dateAuthorContainer}>
            <div>par {author}</div> <div>{date}</div>
          </div>
          <div className={articlePreviewerStyles.thumbnailContainer}>
            <Img fluid={featuredImgFluid} />
          </div>
          <div className={articlePreviewerStyles.descriptionContainer}>
            <div className={articlePreviewerStyles.description}>
              {description}
            </div>
            <div className={articlePreviewerStyles.descriptionSubdivider} />
          </div>
          <div className={articlePreviewerStyles.descriptionCallToAction}>
            Lire l'article
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArticlePreviewer
