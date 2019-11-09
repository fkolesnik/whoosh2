import React from "react"
import "normalize.css"
import "../styles/global.css"
import styled from "styled-components"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "../redux/store"

import LoadProducts from "./LoadProducts"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => (
  <Wrap>
    <PersistGate loading={null} persistor={persistor}>
      <LoadProducts />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </PersistGate>
  </Wrap>
)

export default Layout

const Wrap = styled.div`
  min-height: 100vh;
  padding: 0.25rem;
`
