import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "typeface-lato"
import "typeface-playfair-display"
import "../scss/main.scss"

export default ({ children }) => (
  <>
    <Header />
    <main className="main-body">{children}</main>
    <Footer />
  </>
)
