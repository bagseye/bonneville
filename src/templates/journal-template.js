import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import BlogItem from "../components/Blog/blog-item"
import styled from "styled-components"

const Pager = styled.aside`
  font-family: var(--serif);
  font-size: 1.25rem;
  display: inline-block;

  a {
    color: var(--black);
    text-decoration: none;
  }
`

const PagerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PagerButtons = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const PagerNumbers = styled.div`
  flex: 0 0 100%;

  a {
    padding-right: 1rem;
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
      <Layout>
        <h1>Bonneville Journal</h1>
        <p>
          {" "}
          Welcome to the Bonneville journal. Each page is auto generated through
          gatsby-node.js, which is where you can handle the number of posts per
          page. Pagination is also available
        </p>
        {edges.map(({ node }) => (
          <BlogItem
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
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
                    Previous
                  </Link>
                </Pager>
              )}
              {!isLast && (
                <Pager>
                  <Link to={`/journal/${nextPage}`} rel="next">
                    Next
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
      </Layout>
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
