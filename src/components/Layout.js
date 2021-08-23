import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Logo from "../content/images/bonneville-logo.svg"
import { motion } from "framer-motion"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Typography />
        <Header Logo={Logo} />
        <main className="main-body">{children}</main>
        <Footer Logo={Logo} />
        <CookieConsent
          location="bottom"
          buttonText="Okay"
          cookieName="bonnevilleCookie"
          expires={150}
          style={{
            background: "var(--black)",
            padding: "var(--spacing)",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
          buttonStyle={{
            padding: "1rem",
            color: "var(--black)",
            backgroundColor: "#fff",
            fontSize: "16px",
          }}
        >
          This website uses cookies to help improve your experience. By using
          this site you agree to the webiste{" "}
          <Link to="/privacy" style={{ color: "#fff" }}>
            privacy statement
          </Link>
          .
        </CookieConsent>
      </motion.div>
    </>
  )
}

export default Layout
