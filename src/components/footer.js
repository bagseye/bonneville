import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import socials from "../constants/social-icons"
import { Footer, FooterMenu, FooterSocial } from "../styles/FooterStyles"
import footerMenuItems from "../constants/footer-menu-items"

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
    <Footer>
      <FooterMenu>
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
        {footerMenuItems.map((item, index) => (
          <li key={`footer-menu-item-${index}`}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </FooterMenu>
      <FooterSocial>
        {socials.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            </li>
          )
        })}
      </FooterSocial>
    </Footer>
  )
}
