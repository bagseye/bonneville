import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import Img from "gatsby-image"
import "../scss/main.scss"
import styled from "styled-components"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

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

const ShareArea = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin-right: var(--spacing);
  }
`

export default function Template({ data }) {
  let location = useLocation()
  const { markdownRemark } = data // Object destructuring
  const { frontmatter, html } = markdownRemark // Object destructuring og markdownRemark
  let featuredImgFluid =
    markdownRemark.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <PostMeta>
          <h2>
            Posted / {frontmatter.date} / {frontmatter.author}
          </h2>
        </PostMeta>
        <PostImage>
          <Img fluid={featuredImgFluid} />
        </PostImage>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
        <hr />
        <ShareArea>
          <h4>Share This</h4>
          <Link
            to={`https://www.facebook.com/sharer.php?u=http%3A%2F%2F${location.host}${location.pathname}%2F`}
          >
            <FaFacebook />
          </Link>
          <Link
            to={`https://twitter.com/intent/tweet?url=http%3A%2F%2F${location.host}${location.pathname}`}
          >
            <FaTwitter />
          </Link>
          <Link
            to={`https://www.linkedin.com/sharing/share-offsite/?url=${location.href}`}
          >
            <FaLinkedin />
          </Link>
        </ShareArea>
      </div>
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
        tags
        description
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
