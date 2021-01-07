import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Logo from "../content/images/bonneville-logo.svg"
import socials from "../constants/social-icons"
import menuItems from "../constants/menu-items"
import footerMenuItems from "../constants/footer-menu-items"
import styled from "styled-components"

const FooterStyles = styled.footer`
  padding: calc(var(--spacing) * 2);
  background-color: #f9f9f9;
  font-family: var(--serif);
  font-weight: 300;
  font-size: var(--h6);
  font-style: normal;
  color: var(--charcoal);

  .flex {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  li {
    text-transform: capitalize;
    list-style: none;
    padding-left: 0;

    &:hover {
      a {
        color: var(--primaryColor);
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--charcoal);
    transition: var(--transMed);

    &:hover {
      color: var(--primaryColor);
    }
  }

  @media (min-width: 768px) {
    padding-top: calc(var(--spacing) * 4);
    padding-bottom: calc(var(--spacing) * 4);

    .flex {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .brand-cont {
    margin-left: 0;
    margin-right: auto;
    width: 125px;
    margin-bottom: calc(var(--spacing) * 2);

    img {
      width: 100%;
      margin-bottom: calc(var(--spacing) * 2);
    }

    @media (min-width: 768px) {
      width: 150px;
      margin-bottom: 0;
    }

    address {
      font-style: normal;
      margin-bottom: var(--spacing);
    }
  }

  .footer-menu {
    padding: 0;
    margin: 0;
    margin-bottom: calc(var(--spacing) * 2);

    @media (min-width: 768px) {
      flex-basis: 175px;
      flex-shrink: 0;
      flex-grow: 0;
      margin-bottom: 0;
    }

    li {
      @media (min-width: 768px) {
        padding-left: calc(var(--spacing) / 2);
      }
    }
  }

  .footer-social {
    margin: 0;
    padding-top: var(--spacing);
    padding-left: 0;

    @media (min-width: 768px) {
      padding-top: 0;
      flex-basis: 175px;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }

  .copy {
    margin: 0;
    padding: 0;
    margin-top: calc(var(--spacing) * 2);

    li {
      display: inline;
      margin-right: var(--spacing);
    }
  }
`

export default () => {
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

  return (
    <FooterStyles>
      <div className="flex">
        <div className="brand-cont">
          <Link to="/">
            <img src={Logo} alt={data.site.siteMetadata.title} />
          </Link>
          <address>
            85 Simone Weil Avenue
            <br />
            Watton-at-Stone
            <br />
            SG14 8BL
          </address>
          <a className="telephone" href="tel:+004407076009211">
            07076 009 211
          </a>
        </div>
        <ul className="footer-menu">
          {menuItems.map((item, index) => (
            <li key={`menuItem${index}`}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
          {footerMenuItems.map((item, index) => (
            <li key={`footerMenuItem${index}`}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer-social">
          {socials.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className="copy">
        <li>&copy; {new Date().getFullYear()}</li>
        <li>
          <a
            href={data.site.siteMetadata.authorSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.author}
          </a>
        </li>
      </ul>
    </FooterStyles>
  )
}
