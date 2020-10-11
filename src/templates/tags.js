import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import BlogItem from "../components/Blog/blog-item"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <>
      <div>
        <h1>{tagHeader}</h1>

        {edges.map(({ node }) => {
          const { path } = node.frontmatter
          const { title } = node.frontmatter
          const { date } = node.frontmatter
          const { tags } = node.frontmatter

          return (
            <BlogItem
              title={title}
              excerpt={node.excerpt}
              path={path}
              date={date}
              tag={tags}
            />
          )
        })}
      </div>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            // fields: PropTypes.shape({
            //   slug: PropTypes.string.isRequired,
            // }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
