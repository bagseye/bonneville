import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Logo from "../content/images/bonneville-logo.svg"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header Logo={Logo} />
      <main className="main-body">{children}</main>
      <Footer Logo={Logo} />
    </>
  )
}

export default Layout
