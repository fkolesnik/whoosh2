import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.css"
import styled from "styled-components"

export default ({ children }) => (
  <Wrap>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrap>
)

const Wrap = styled.div`
  padding: 0.25rem;
  min-height: 100vh;
`
