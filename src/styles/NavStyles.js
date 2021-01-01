import styled from "styled-components"

export const HeaderStyles = styled.header`
  z-index: 3;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  grid-template-columns: 200px auto;
  grid-gap: 1rem;
  padding: 1rem 2rem;
  background-color: #fff;
  transition: box-shadow var(--transMed) ease;

  &.scrolled {
    box-shadow: -1px 5px 11px 0px rgba(0, 0, 0, 0.1);
  }

  .logo-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;

    a {
      display: inline-block;
      line-height: 2.5rem;
      color: var(--black);
      text-decoration: none;
      transition: var(--transMed);
      position: relative;

      &:hover {
        color: var(--primaryColor);
      }
    }

    img {
      vertical-align: middle;
      width: 125px;

      @media (min-width: 768px) {
        width: 150px;
      }
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
    }
  }
`

export const NavigationStyles = styled.nav`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    background-color: #fff;
    z-index: 2;
    transform: translateX(100%);
    transition: var(--transMed);

    &.open {
      transform: translateX(0%);
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    text-transform: capitalize;

    li {
      padding-left: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1.15rem;
      font-family: "Playfair Display";
      font-weight: 300;
    }

    @media (min-width: 768px) {
      ul {
        align-items: center;
        li {
          padding-left: 2rem;
          justify-content: flex-end;
        }
      }
    }
  }
`

export const BurgerStyles = styled.button`
  border: none;
  background-color: transparent;
  font-family: var(--serif);
  color: var(--charcoal);
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 3;
  font-size: 1.15rem;

  &:focus {
    outline: none;
  }

  > div {
    margin-left: 8px;

    span {
      display: block;
      background-color: var(--charcoal);
      transition: width 0.3s ease;
      width: 30px;
      height: 1px;

      &:nth-child(1) {
        transform: translateY(-8px);
      }

      &:nth-child(3) {
        transform: translateY(8px);
      }
    }
  }

  &.open {
    > div {
      span {
        &:nth-child(2) {
          width: 20px;
        }

        &:nth-child(3) {
          width: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
