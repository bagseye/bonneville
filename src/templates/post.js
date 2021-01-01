import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import Share from "../components/Share/share-container"
import Button from "../components/Button/button"
import { BlogPostStyles } from "../styles/BlogStyles"

export default function Template({ data }) {
  let location = useLocation()
  const { markdownRemark } = data // Object destructuring
  const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <BlogPostStyles>
        <h1>{frontmatter.title}</h1>

        {/* Check if date or author has been declared in MD file
        If so, render the meta */}
        {(frontmatter.date || frontmatter.author) && (
          <aside className="meta">
            <h2>
              {/* If there is date, display it */}
              Posted {frontmatter.date && `/ ${frontmatter.date}`}{" "}
              {/* If there is author, display it */}
              {frontmatter.author && `/ ${frontmatter.author}`}
            </h2>
          </aside>
        )}

        {/* If featured image is present, render featured image */}
        {featuredImgFluid && (
          <div className="post-img">
            <Img fluid={featuredImgFluid} />
          </div>
        )}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr />
        <Link to="/journal" className="btn-link">
          <Button text="Return to Journal Home" />
        </Link>

        {/* If there are tags for the post, render this section */}
        {frontmatter.tags && (
          <>
            <hr />
            <h4>
              Posted under /{" "}
              {frontmatter.tags.map((tagName, index) => {
                return (
                  <Link to={`/tags/${tagName}`} key={index}>
                    {tagName}
                  </Link>
                )
              })}
            </h4>
          </>
        )}
        <hr />
        <Share facebook twitter linkedin href={location.href} />
      </BlogPostStyles>
    </>
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
        tags
        description
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
