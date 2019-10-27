import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter } from "react-icons/fa"

export default ({ children }) => {
  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  const showYear = new Date().getFullYear()

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            twitterURL
            githubURL
          }
        }
      }
    `
  )

  const FooterCont = styled.div`
    footer {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .nav-cont {
        padding: 0;
        margin: 0 0 1rem 0;

        @media (min-width: 768px) {
          margin-bottom: 0;
        }

        li {
          display: inline;
          padding-right: 0.5rem;
          font-weight: var(--heavyWeight);

          &::after {
            content: "/";
            display: inline-block;
            padding-left: 0.5rem;
          }
        }
      }

      .socials {
        margin: 0;
        padding-left: 0;

        li {
          font-size: 2rem;
          list-style: none;
          display: inline;

          a {
            color: var(--black);
            transition: var(--transMed);
          }

          &:hover {
            a {
              color: var(--primaryColor);
            }
          }
        }
      }
    }
  `

  return (
    <FooterCont>
      <footer>
        <ul className="nav-cont">
          <li>&copy; {showYear}</li>
          <li>{data.site.siteMetadata.author}</li>
          <ListLink to="/privacy/">Privacy</ListLink>
          <ListLink to="/cookies/">Cookies</ListLink>
        </ul>
        <ul className="socials">
          <li>
            <a href={data.site.siteMetadata.twitterURL}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={data.site.siteMetadata.githubURL}>
              <DiGithubBadge />
            </a>
          </li>
        </ul>
      </footer>
    </FooterCont>
  )
}
