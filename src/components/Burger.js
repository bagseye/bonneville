import React, { useContext } from "react"
import { BurgerStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const Burger = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <BurgerStyles
      onClick={toggleNav}
      type="button"
      className={isOpen ? "open" : "closed"}
    >
      Menu
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerStyles>
  )
}

export default Burger
