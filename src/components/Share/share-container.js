import React from "react"
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import ShareIcon from "../Share/share-icon"
import styled from "styled-components"

const ShareArea = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin-right: var(--spacing);
  }
`

const ShareCont = ({ facebook, twitter, linkedin, href }) => {
  return (
    <ShareArea>
      <h4>Share This</h4>
      {twitter && (
        <ShareIcon shareUrl={`https://twitter.com/intent/tweet?url=${href}`}>
          <FaTwitter />
        </ShareIcon>
      )}
      {facebook && (
        <ShareIcon
          shareUrl={`https://www.facebook.com/sharer.php?u=${href}%2F`}
        >
          <FaFacebook />
        </ShareIcon>
      )}
      {linkedin && (
        <ShareIcon
          shareUrl={`https://www.linkedin.com/sharing/share-offsite/?url=${href}`}
        >
          <FaLinkedin />
        </ShareIcon>
      )}
    </ShareArea>
  )
}

export default ShareCont
