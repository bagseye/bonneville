import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../../components/Button/button"
import Img from "gatsby-image"

const BlogItem = styled.article`
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
`

const BlogImage = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  overflow: hidden;
  background-color: #000;

  figure {
    margin: 0;
    opacity: 1;
    transition: transform var(--transSlow), opacity var(--transSlow);
  }

  &:hover {
    figure {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`

const BlogTitle = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  h2 {
    font-size: var(--h3);
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-size: var(--h5);
    color: var(--primaryColor);
  }
`

const BlogContent = styled.div`
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
`

const BlogList = ({ key, fluid, title, excerpt, path, date, alt }) => {
  return (
    <BlogItem key={key}>
      <BlogImage>
        <figure>
          <Link to={path}>
            <Img fluid={fluid} alt={alt} />
          </Link>
        </figure>
      </BlogImage>
      <BlogTitle>
        <Link to={path}>
          <h2>{title}</h2>
        </Link>
      </BlogTitle>
      <BlogContent>
        <p>{excerpt}</p>
        <BlogMeta>
          <Link className="btn-link" to={path}>
            <Button />
          </Link>
          <h4>{date}</h4>
        </BlogMeta>
      </BlogContent>
    </BlogItem>
  )
}

export default BlogList
