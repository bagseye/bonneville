import React from "react"
import { Link } from "gatsby"
import styles from "../scss/footer.module.scss"

const ListLink = props => (
    <li className="nav-link">
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const showYear = new Date().getFullYear();

export default () => (
    <footer className={styles.footer}>
        <ul className={styles.navCont}>
            <li>&copy; {showYear}</li>
            <li>Morgan Baker</li>
            <ListLink to="/privacy/">Privacy</ListLink>
            <ListLink to="/cookies/">Cookies</ListLink>
        </ul>
    </footer>
)