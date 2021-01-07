import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <main className="main-body">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
