import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogItem from "../components/Blog/blog-item"
import Button from "../components/Button/button"
import styled from "styled-components"

const Tags = ({ pageContext, data }) => {
  console.log(pageContext)
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>

        {edges.map(({ node }) => {
          const { path } = node.frontmatter
          const { title } = node.frontmatter
          const { date } = node.frontmatter
          return (
            <BlogItem
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              title={title}
              excerpt={node.excerpt}
              path={path}
              date={date}
            />
          )
        })}

        <Link to="/tags">
          <Button text="All Tags" />
        </Link>
      </div>
    </Layout>
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
  query($tag: String, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
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
