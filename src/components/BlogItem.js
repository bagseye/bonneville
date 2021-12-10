import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PropTypes from "prop-types"

const BlogItemStyles = styled.article`
  margin: calc(var(--spacing) * 4) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: var(--spacing);

  @media (min-width: 768px) {
    margin: calc(var(--spacing) * 6) 0;
    grid-template-rows: auto auto;
    grid-gap: calc(var(--spacing) * 2);
  }

  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 8) 0;
    grid-gap: calc(var(--spacing) * 3);
  }

  > figure {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    overflow: hidden;
    background-color: #000;
    margin: 0;
    opacity: 1;

    img {
      transition: transform var(--transSlow) ease, opacity var(--transSlow) ease !important;
      opacity: 1;
    }
  }

  &:hover {
    > figure {
      img {
        transform: scale(1.1);
        opacity: 0.5 !important;
      }
    }
  }

  h2 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    font-size: var(--h3);
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    h2 {
      grid-column: 1 / 2;
    }
  }

  > div {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    p {
      margin-top: 0;
    }
    @media (min-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      p {
        margin-bottom: calc(var(--spacing) * 2);
      }
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;

    h4 {
      margin: 0;
      color: var(--primaryColor);
    }
  }
`

const BlogItem = ({ index, nodeObj }) => {
  const {
    excerpt,
    frontmatter: { title, date, path, featuredImageAlt, featuredImage },
  } = nodeObj
  const image = getImage(featuredImage)

  return (
    <BlogItemStyles key={`blog-item-${index}`}>
      {image && (
        <figure>
          <Link to={path}>
            <span className="sr-only">{title}</span>
            <GatsbyImage loading="lazy" image={image} alt={featuredImageAlt} />
          </Link>
        </figure>
      )}

      {title && (
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
      )}

      {excerpt && (
        <div>
          <p>{excerpt}</p>
          {path && (
            <div className="meta">
              <Link className="btn-link" to={path}>
                Read
              </Link>
              <h4>{date}</h4>
            </div>
          )}
        </div>
      )}
    </BlogItemStyles>
  )
}

BlogItem.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default BlogItem
