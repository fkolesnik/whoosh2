import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.css"

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
