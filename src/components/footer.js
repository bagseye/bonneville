import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <footer>
        <ul>
            <ListLink to="/privacy/">Privacy</ListLink>
            <ListLink to="/cookies/">Cookies</ListLink>
        </ul>
    </footer>
)