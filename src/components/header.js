import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../scss/header.module.scss"

export default ({ children }) => {

    const [hidden, setHidden] = useState(true);

    console.log(hidden);

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
        <header className={styles.header}>
            {hidden ? (
                <button onClick={() => setHidden(true)}>Menu</button>
            ) : (
                    <button onClick={() => setHidden(false)}>Menu</button>
                )}
            <div className={styles.logoCont}>
                <Link to="/">
                    <h2>{data.site.siteMetadata.title}</h2>
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navCont}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/profile/">Profile</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </nav>
        </header>
    )
}

