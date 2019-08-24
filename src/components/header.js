import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h2 style={{ display: `inline` }}>Bonneville</h2>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/profile/">Profile</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </header>
)