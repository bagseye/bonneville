import styled from "styled-components"

export const Footer = styled.footer`
  padding: var(--spacing) calc(var(--spacing) * 2);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterMenu = styled.ul`
  padding: 0;
  margin: 0;
  font-family: var(--serif);
  font-weight: 300;

  li {
    text-transform: capitalize;
    display: inline;

    &::after {
      content: "/";
      display: inline-block;
      padding-left: calc(var(--spacing) / 2);
    }

    a {
      font-weight: 300;
      text-decoration: none;
      color: var(--charcoal);
      transition: var(--transMed);
    }

    &:hover {
      a {
        color: var(--primaryColor);
      }
    }

    @media (min-width: 768px) {
      padding-left: calc(var(--spacing) / 2);
    }
  }
`

export const FooterSocial = styled.ul`
  margin: 0;
  padding-top: var(--spacing);
  padding-left: 0;

  @media (min-width: 768px) {
    padding-top: 0;
  }

  li {
    font-size: var(--h4);
    list-style: none;
    display: inline;
    margin: 0 var(--spacing) 0 0;
    padding-left: 0;

    a {
      color: var(--charcoal);
      transition: var(--transMed);
    }

    &:hover {
      a {
        color: var(--primaryColor);
      }
    }

    @media (min-width: 768px) {
      margin: 0 0 0 var(--spacing);
    }

    @media (min-width: 1200px) {
      font-size: var(--h5);
    }
  }
`
