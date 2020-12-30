import React from "react"
import { Link } from "gatsby"
import Button from "../../components/Button/button"
import Img from "gatsby-image"
import { BlogItemStyles } from "../../styles/BlogStyles"

const BlogList = props => {
  const { key, fluid, title, excerpt, path, date, alt } = props
  return (
    <BlogItemStyles key={`blog-item-${key}`}>
      <figure>
        <Link to={path}>
          <Img fluid={fluid} alt={alt} />
        </Link>
      </figure>
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <div>
        <p>{excerpt}</p>
        <div className="meta">
          <Link className="btn-link" to={path}>
            <Button />
          </Link>
          <h4>{date}</h4>
        </div>
      </div>
    </BlogItemStyles>
  )
}

export default BlogList
