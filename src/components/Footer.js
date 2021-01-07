import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  mainMenuItems,
  footerMenuItems,
  socialMenuItems,
} from "../constants/menu-items"
import styled from "styled-components"
import PropTypes from "prop-types"

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
    margin-bottom: calc(var(--spacing) * 2);

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    li {
      @media (min-width: 768px) {
        padding-left: calc(var(--spacing) / 2);
      }
    }
  }

  .footer-menu,
  .footer-social {
    margin: 0;

    @media (min-width: 768px) {
      flex-basis: 175px;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }

  .footer-social {
    padding-top: var(--spacing);
    padding-left: 0;

    @media (min-width: 768px) {
      padding-top: 0;
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

const Footer = ({ Logo }) => {
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

  const footerData = data.site.siteMetadata

  return (
    <FooterStyles>
      <div className="flex">
        <div className="brand-cont">
          {/* If there is a logo, render this */}
          {Logo && (
            <Link to="/">
              <img src={Logo} alt={footerData.title} />
            </Link>
          )}
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

        {/* If main menu items are being imported, render this */}
        {mainMenuItems && (
          <ul className="footer-menu">
            {mainMenuItems.map((item, index) => (
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
        )}

        {/* If social menu items are being imported, render this */}
        {socialMenuItems && (
          <ul className="footer-social">
            {socialMenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <ul className="copy">
        <li>&copy; {new Date().getFullYear()}</li>

        {/* if there is an author stated in the config, render this */}
        {footerData.author && (
          <li>
            <a
              href={footerData.authorSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.author}
            </a>
          </li>
        )}
      </ul>
    </FooterStyles>
  )
}

Footer.propTypes = {
  Logo: PropTypes.string,
}

export default Footer
