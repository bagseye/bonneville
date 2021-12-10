const path = require(`path`)
const _ = require("lodash")
const { NONAME } = require("dns")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Page Templates
  const pageTemplate = path.resolve("src/templates/page-template.js")
  const blogTemplate = path.resolve("src/templates/post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  // Auto generate pages
  // Pages built using templates/page-template.js
  const pageData = [
    {
      name: "404",
      title:
        "This is the error page. You can change this title in gatsby-node.js",
    },
  ]
  pageData.forEach((page) => {
    createPage({
      path: `/${page.name}`,
      component: pageTemplate,
      context: { page },
    })
  })

  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.path,
      },
    })
  })

  // Create blog list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 10 // Change for number posts to display per page
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/journal` : `/journal/${i + 1}`,
      component: path.resolve("./src/templates/journal-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Make Tag Pages
  const tags = result.data.tagsGroup.group

  tags.forEach((tag, i) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
