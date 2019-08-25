import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)

    return (
        <Layout>
            <h1>The Home Page</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.frontmatter.path}>
                        <h3>{node.frontmatter.title}</h3>
                    </Link>
                    <h4>{node.frontmatter.date}</h4>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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

