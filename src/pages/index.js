import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../scss/blog.module.scss"
import Seo from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"

export default ({ data }) => {
  return (
    <Layout>
      <Seo />
      <h1>
        My name is Bonneville. I'm a starter theme for Gatsby and I like to talk
        as if I am a living thing
      </h1>
      <h4 className={styles.feature}>
        {data.allMarkdownRemark.totalCount} Featured Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogItem
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
        />
      ))}
    </Layout>
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
          }
          excerpt
        }
      }
    }
  }
`
