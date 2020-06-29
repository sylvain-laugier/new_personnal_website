const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { voronoiSingleton } = require("./sourceMeteoData/franceMap/prepareData")
const pluieSumByYear = require("./sourceMeteoData/weatherData/pluie_sum_by_year.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  // posts.forEach((post, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //   const next = index === 0 ? null : posts[index - 1].node

  //   createPage({
  //     path: post.node.fields.slug,
  //     component: blogPost,
  //     context: {
  //       slug: post.node.fields.slug,
  //       previous,
  //       next,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const data = {
    voronoiData: voronoiSingleton.data,
    weatherData: { pluieSumByYear },
  }
  createNode({
    id: createNodeId("sourceMeteoData"),
    data,
    internal: {
      type: `SourceMeteoData`,
      contentDigest: createContentDigest(data),
    },
  })
}
