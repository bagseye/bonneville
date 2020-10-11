import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import styled from "styled-components"
import Share from "../components/Share/share-container"
import Button from "../components/Button/button"

const PostMeta = styled.aside`
  h2 {
    font-size: var(--h4);
    color: var(--primaryColor);
    margin: calc(var(--spacing) / 2) 0;
  }
`

const PostImage = styled.div`
  margin: calc(var(--spacing) * 2) 0;

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`

const PostedTitle = styled.h4`
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
  const { markdownRemark } = data // Object destructuring
  const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>

        {/* Check if date or author has been declared in MD file
        If so, render the meta */}
        {(frontmatter.date || frontmatter.author) && (
          <PostMeta>
            <h2>
              {/* If there is date, display it */}
              Posted {frontmatter.date && `/ ${frontmatter.date}`}{" "}
              {/* If there is author, display it */}
              {frontmatter.author && `/ ${frontmatter.author}`}
            </h2>
          </PostMeta>
        )}

        {/* If featured image is present, render featured image */}
        {featuredImgFluid && (
          <PostImage>
            <Img fluid={featuredImgFluid} />
          </PostImage>
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
            <PostedTitle>
              Posted under /{" "}
              {frontmatter.tags.map((tagName, index) => {
                return (
                  <Link to={`/tags/${tagName}`} key={index}>
                    {tagName}
                  </Link>
                )
              })}
            </PostedTitle>
          </>
        )}
        <hr />
        <Share facebook twitter linkedin href={location.href} />
      </div>
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
