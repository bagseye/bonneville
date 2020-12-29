import React, { useState } from "react"

// Create the menu context
const MenuContext = React.createContext()

export function MenuProvider({ children }) {
  // Access this state around the app
  const [isOpen, setNav] = useState([])

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
