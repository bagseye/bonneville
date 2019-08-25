import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
    const { markdownRemark } = data // Object destructuring
    const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark

    return (
        <Layout>
            <main className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </main>
        </Layout>
    )
}
export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`