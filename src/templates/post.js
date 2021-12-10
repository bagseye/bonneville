import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import Share from "../components/ShareContainer"
import Banner from "../components/Banner"
import styled from "styled-components"
import Layout from "../components/Layout"

const BlogPostStyles = styled.div`
  .meta {
    h2 {
      font-size: var(--h4);
      color: var(--primaryColor);
      margin: calc(var(--spacing) / 2) 0;
    }
  }

  .post-img {
    margin: calc(var(--spacing) * 2) 0;

    @media (min-width: 1200px) {
      margin: calc(var(--spacing) * 4) 0;
    }
  }

  font-weight: 400;
  font-size: var(--h4);
  color: var(--primaryColor);

  a {
    text-decoration: none;
    margin-right: calc(var(--spacing) / 2);
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 0.1rem;
      width: 100%;
      background-color: var(--charcoal);
      left: 0;
      bottom: -0.25rem;
      opacity: 1;
      transition: opacity var(--transSlow);
    }

    &:hover,
    &:focus {
      cursor: pointer;

      &:after {
        opacity: 0.15;
      }
    }

    &::last-child {
      margin-right: 0;
    }
  }
`

export default function Template({ data }) {
  let location = useLocation()
  const {
    markdownRemark: { frontmatter, html },
  } = data // Object destructuring
  let featuredImgFluid =
    frontmatter.featuredImage.childImageSharp.gatsbyImageData

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <Layout>
        <BlogPostStyles>
          <Banner content={frontmatter.title} />

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
              <GatsbyImage image={featuredImgFluid} />
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <hr />
          <Link to="/journal" className="btn-link">
            Return to Journal Home
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
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query ($path: String!) {
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
