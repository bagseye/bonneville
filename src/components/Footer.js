import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  mainMenuItems,
  footerMenuItems,
  socialMenuItems,
} from "../constants/menu-items"
import styled from "styled-components"
import PropTypes from "prop-types"

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
        {Logo ? (
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
        ) : null}

        {mainMenuItems || socialMenuItems || footerMenuItems ? (
          <div className="menus-cont">
            {/* If main menu items are being imported, render this */}
            {mainMenuItems && (
              <ul className="footer-menu">
                {/* First we want to filter out the Home menu item, then display the rest of them */}
                {mainMenuItems
                  .filter(item => {
                    return item.title !== "home"
                  })
                  .map((item, index) => (
                    <li key={`menuItem${index}`}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            )}

            {/* If social menu items are being imported, render this */}
            {socialMenuItems && (
              <ul className="footer-menu">
                {socialMenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}

            {/* If footer menu items are being imported, render this */}
            {footerMenuItems && (
              <ul className="footer-menu">
                {footerMenuItems.map((item, index) => (
                  <li key={`footerMenuItem${index}`}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        <div className="copy-cont">
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
        </div>
      </div>
    </FooterStyles>
  )
}

Footer.propTypes = {
  Logo: PropTypes.string,
}

const FooterStyles = styled.footer`
  padding: calc(var(--spacing) * 2);
  background-color: #f9f9f9;
  font-family: var(--serif);
  font-weight: 300;
  font-style: normal;
  color: var(--charcoal);

  .flex {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .telephone,
  address,
  li {
    font-size: var(--footerMenuItem);
  }

  address {
    font-style: normal;
    margin-bottom: var(--spacing);
  }

  li {
    text-transform: capitalize;
    list-style: none;
    padding-left: 0;
    margin-top: 5px;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      margin-top: 10px;
      margin-bottom: 10px;
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
  }

  .brand-cont,
  .brand-cont img {
    margin-bottom: calc(var(--spacing) * 2);
  }

  .brand-cont {
    margin-left: 0;
    margin-right: auto;
    width: 100%;

    a {
      display: inline-block;
    }

    img {
      width: 100%;
    }
  }

  .footer-menu {
    margin: 0;
    width: 50%;
    flex-shrink: 0;
    margin-bottom: calc(var(--spacing) * 2);
    padding: 0;
    margin-bottom: calc(var(--spacing) * 2);

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 375px) {
      width: calc(100% / 3);
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      flex-basis: 125px;
      flex-grow: 0;
      margin-bottom: 0;

      li {
        padding-left: calc(var(--spacing) / 2);
      }
    }

    @media (min-width: 1200px) {
      flex-basis: 175px;
    }
  }

  .brand-cont,
  .menus-cont,
  .copy-cont {
    width: 100%;
    font-size: 0.85rem;
  }

  .brand-cont {
    width: 125px;

    @media (min-width: 600px) {
      width: 150px;
      flex-basis: 150px;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }

  .menus-cont {
    @media (min-width: 375px) {
      display: flex;
    }

    @media (min-width: 600px) {
      display: flex;
      justify-content: flex-end;
      width: calc(100% - 200px);
    }
  }

  .copy {
    margin: 0;
    padding: 0;
    margin-top: calc(var(--spacing) * 2);

    @media (min-width: 600px) {
      margin-top: 0;
    }

    li {
      display: inline;
      margin-right: var(--spacing);
    }
  }
`

export default Footer
