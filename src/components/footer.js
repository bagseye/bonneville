import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../scss/footer.module.scss"
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

  return (
    <footer className={styles.footer}>
      <ul className={styles.navCont}>
        <li>&copy; {showYear}</li>
        <li>{data.site.siteMetadata.author}</li>
        <ListLink to="/privacy/">Privacy</ListLink>
        <ListLink to="/cookies/">Cookies</ListLink>
      </ul>
      <ul className={styles.socials}>
        <li><a href={data.site.siteMetadata.twitterURL}><FaTwitter /></a></li>
        <li><a href={data.site.siteMetadata.githubURL}><DiGithubBadge /></a></li>
      </ul>
    </footer>
  )
}
