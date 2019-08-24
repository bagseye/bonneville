import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
    <>
        <Header />
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
        </div>
        <Footer />
    </>
)