import React from "react"
import { Link } from "gatsby"

const ShareIcon = ({ shareUrl, children }) => {
  return (
    <Link to={shareUrl} target="_blank" rel="noopenner noreferrer">
      {children}
    </Link>
  )
}

export default ShareIcon
