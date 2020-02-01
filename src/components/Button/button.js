import React from "react"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"

const Button = () => {
  return (
    <ButtonWrapper>
      Read Article <FaChevronRight className="arrow" />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border: 1px solid #aaa;
  border-radius: 3px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  padding: 0.75rem 1rem;
  display: flex;
  font-weight: 400;
  font-family: "Roboto";
  transition: 0.3s;
  color: #3e3e3e;
  text-decoration: none;

  .arrow {
    align-self: center;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #3a3a3a;
    border-color: #3a3a3a;
    color: #fff;
  }
`

export default Button
