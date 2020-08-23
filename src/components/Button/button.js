import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <ButtonWrapper type={props.type}>
      {props.text ? props.text : "Read Article"}{" "}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--h5);
  padding: 0;
  display: flex;
  font-family: var(--serif);
  color: var(--charcoal);
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 0.1rem;
    width: 100%;
    background-color: var(--charcoal);
    left: 0;
    bottom: -0.25rem;
    opacity: 1;
    transition: opacity var(--transSlow);
  }

  &:hover,
  &:focus {
    cursor: pointer;

    &:after {
      opacity: 0.15;
    }
  }
`

export default Button
