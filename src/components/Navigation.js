import { Link } from "gatsby"
import React, { useContext } from "react"
import { mainMenuItems } from "../constants/menu-items"
import { NavigationStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const Navigation = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <NavigationStyles className={isOpen ? "open" : "closed"}>
      <ul>
        {mainMenuItems.map((item, index) => (
          <li key={`menu-item-${index}`} className="nav-link">
            <Link to={item.path} onClick={toggleNav}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
