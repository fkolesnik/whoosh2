import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "../styles/global.css"
import styled from "styled-components"
import { Consumer } from "../context"
import LoadProducts from "./LoadProducts"

export default props => (
  <Consumer>
    {value => {
      return (
        <Wrap>
          <LoadProducts loadProducts={value.loadProducts} />
          <Header />
          <main>{props.children}</main>
          <Footer />
        </Wrap>
      )
    }}
  </Consumer>
)

const Wrap = styled.div`
  min-height: 100vh;
  padding: 0.25rem;
  overflow: hidden;
`
