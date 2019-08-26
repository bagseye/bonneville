import React from "react"
import { Link, graphql } from "gatsby"
// import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../scss/blog.module.scss"

export default ({ data }) => {
    console.log(data)

    return (
        // <Helmet>
        //     <meta charSet="utf-8" />
        //     <title>Bonneville | A Gatsby Starter Theme</title>
        //     <link rel="cannonical" href="https://bonneville.netlify.com" />
        //     <meta name="description" content="A starter theme for Gatsby JS created by Morgan Baker" />
        // </Helmet>
        <Layout>
            <h1>This is Bonneville. A starter theme for Gatsby</h1>
            <h4>{data.allMarkdownRemark.totalCount} Featured Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <article className={styles.item}>
                    <div className={styles.title}>
                        <h2>
                            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                        </h2>
                    </div>
                    <div className={styles.content}>
                        <p>{node.excerpt}</p>
                        <div className={styles.meta}>
                            <Link to={node.frontmatter.path}><button className="btn">Read Article</button></Link>
                            <h4>{node.frontmatter.date}</h4>
                        </div>
                    </div>
                </article>
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

