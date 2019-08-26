import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? "/blog/" : (currentPage - 1).toString()
        const nextPage = "blog/" + (currentPage + 1).toString()

        return (
            <Layout>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.frontmatter.path
                    return <div key={node.frontmatter.path}>{title}</div>
                })}

                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        Previous Page
                    </Link>
                )}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page
                    </Link>
                )}
            </Layout>
        )
    }
}
export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
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