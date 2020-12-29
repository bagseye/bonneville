import { Link } from "gatsby"
import React, { useContext } from "react"
import MenuItems from "../constants/menu-items"
import { NavigationStyles } from "../styles/NavStyles"
import MenuContext from "./MenuContext"

const Navigation = () => {
  const [isOpen] = useContext(MenuContext)

  return (
    <NavigationStyles className={isOpen ? "open" : "closed"}>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={`menu-item-${index}`} className="nav-link">
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
