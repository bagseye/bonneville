import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../scss/header.module.scss"
import "../scss/main.scss"

export default ({ children }) => {
  const [menuStatus, menuChange] = useState(false)

  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={`${menuStatus ? styles.menuOpen : "menu-closed"}`}>
      <header className={styles.header}>
        <div className={styles.logoCont}>
          <Link to="/">
            <h2>{data.site.siteMetadata.title}</h2>
          </Link>
        </div>
        <button className="btn" onClick={() => menuChange(!menuStatus)}>
          Menu
        </button>
        <nav className={styles.nav}>
          <ul className={styles.navCont}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/profile/">Profile</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </header>
    </div>
  )
}
