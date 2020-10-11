import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"
import Button from "../components/Button/button"
import styled from "styled-components"

const Pager = styled.aside`
  font-family: var(--serif);
  font-size: var(--h5);

  a {
    color: var(--black);
    text-decoration: none;
  }
`

const PagerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: var(--spacing);

  @media (min-width: 768px) {
    grid-gap: calc(var(--spacing) * 2);
  }

  @media (min-width: 1200px) {
    grid-gap: calc(var(--spacing) * 3);
  }
`

const PagerButtons = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-between;
`

const PagerNumbers = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  a {
    padding-right: var(--spacing);
  }
`

const JournalTemplate = props => {
  const { edges } = props.data.allMarkdownRemark

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <SEO title="Read more about the projects at Bonneville" />
      <h1>Bonneville Journal</h1>
      <p>
        {" "}
        This is the Bonneville journal. Here you will find an elegant blog
        system that will help you make announcements to your cleints with ease.
      </p>
      <p>
        Each page displays a maximum of 10 posts before displaying the
        pagination component. To change the maximum number of posts per page,
        please visit gatsby-node.js.
      </p>
      {edges.map(({ node }) => (
        <BlogItem
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
          tag={node.frontmatter.tags}
        />
      ))}
      {/* Paging controls
        If there are multiple pages, show pager */}
      {numPages > 1 && (
        <PagerContainer>
          <PagerButtons>
            {!isFirst && (
              <Pager>
                <Link to={`/journal/${prevPage}`} rel="prev">
                  <Button text="Previous" />
                </Link>
              </Pager>
            )}
            {!isLast && (
              <Pager>
                <Link to={`/journal/${nextPage}`} rel="next">
                  <Button text="Next" />
                </Link>
              </Pager>
            )}
          </PagerButtons>
          <PagerNumbers>
            <Pager>
              {Array.from({ length: numPages }, (_, i) => (
                <Link
                  key={`pagination-numbers${i + 1}`}
                  to={`/journal/${i === 0 ? "" : i + 1}`}
                >
                  {i + 1}
                </Link>
              ))}
            </Pager>
          </PagerNumbers>
        </PagerContainer>
      )}
    </>
  )
}

export default JournalTemplate

export const journalQuery = graphql`
  query journalQuery($skip: Int!, $limit: Int!) {
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
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
