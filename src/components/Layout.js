import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.css"

export default ({ children }) => (
  <div style={{ padding: ".25rem" }}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
