import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import socials from "../constants/social-icons"

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
            authorSite
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

      h2 {
        font-size: 1rem;
        margin: 0.75rem 0;

        @media (min-width: 768px) {
          margin-top: 0;
        }
      }

      hr {
        margin: 0.75rem 0;
      }

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .nav-cont {
        padding: 0;
        margin: 0 0 1rem 0;
        font-family: "Playfair Display";
        font-weight: 300;

        @media (min-width: 768px) {
          margin-bottom: 0;
          align-self: flex-end;
        }

        li {
          display: inline;
          padding-right: 0.5rem;

          &::after {
            content: "/";
            display: inline-block;
            padding-left: 0.5rem;
          }

          a {
            font-weight: 300;
            text-decoration: none;
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

      .socials {
        &-cont {
          p {
            margin: 0.75rem 0;
            font-size: 0.85rem;
          }

          max-width: 225px;
        }
        margin: 0;
        padding-left: 0;

        li {
          font-size: 2rem;
          list-style: none;
          display: inline;
          margin-right: 0.75rem;

          &:last-child {
            margin-right: 0;
          }

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
          <li>
            <a
              href={data.site.siteMetadata.authorSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.site.siteMetadata.author}
            </a>
          </li>
          <ListLink to="/privacy/">Privacy</ListLink>
          <ListLink to="/cookies/">Cookies</ListLink>
        </ul>
        <div className="socials-cont">
          <h2>Find out more</h2>
          <p>For details about the developer of this theme, please visit</p>
          <hr />
          <ul className="socials">
            {socials.map((item, index) => {
              return (
                <li>
                  <a key={index} href={item.url}>
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    </FooterCont>
  )
}
