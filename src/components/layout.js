import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
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
