import React from "react"
import { Link } from "gatsby"
import styles from "../scss/header.module.scss"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <header className={styles.header}>
        <div className={styles.logoCont}>
            <Link to="/">
                <h2>Bonneville</h2>
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