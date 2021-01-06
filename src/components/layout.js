import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"

export default ({ children }) => {
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
