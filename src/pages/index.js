import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"
import styled from "styled-components"

const FeaturedItems = styled.h4`
  font-size: 1.2rem;
  color: #939393;
`

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <>
      <Seo />
      <h1>
        My name is Bonneville. I'm a starter theme for Gatsby and I like to talk
        as if I am a living thing
      </h1>
      <FeaturedItems>
        {allMarkdownRemark.totalCount} Featured Posts
      </FeaturedItems>
      {allMarkdownRemark.edges.map(({ node }) => (
        <BlogItem
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
          alt={node.frontmatter.featuredImageAlt}
          tag={node.frontmatter.tags}
        />
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
            featuredImageAlt
          }
          excerpt
        }
      }
    }
  }
`
