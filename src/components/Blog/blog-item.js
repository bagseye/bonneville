import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../../components/Button/button"

const BlogItem = styled.article`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const BlogTitle = styled.div`
  h2 {
    display: inline-block;
    position: relative;
    line-height: 2.25rem;
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    box-sizing: border-box;
    padding-right: 2rem;
    width: 50%;

    h2 {
      margin: 0;
      font-size: 1.75rem;
    }
  }
`

const BlogMeta = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-size: 1rem;
    line-height: 30px;
    color: #939393;
  }
`

const BlogContent = styled.div`
  @media (min-width: 768px) {
    width: 48%;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 0;
    }
  }
`

const BlogList = ({ key, title, excerpt, path, date }) => {
  return (
    <BlogItem key={key}>
      <BlogTitle>
        <h2>{title}</h2>
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
