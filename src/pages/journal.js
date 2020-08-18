import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogItem from "../components/Blog/blog-item"

const Journal = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <h1>Bonneville Journal</h1>
        <p>
          {" "}
          Phasellus vel egestas ipsum. Integer tristique ullamcorper purus a
          suscipit. Duis condimentum arcu tortor, vitae faucibus elit eleifend
          eu. Curabitur mauris risus, pretium et est at, consequat venenatis
          sem. Phasellus vehicula ligula id mauris facilisis bibendum.
        </p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogItem
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
          />
        ))}
      </Layout>
    </>
  )
}

export default Journal

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
          }
          excerpt
        }
      }
    }
  }
`
