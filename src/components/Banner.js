import React from "react"
import PropTypes from "prop-types"

const Banner = ({ content }) => {
  return <h1>{content}</h1>
}

Banner.propsTypes = {
  content: PropTypes.string,
}

export default Banner
