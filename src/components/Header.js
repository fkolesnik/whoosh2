import React from "react"
import styled from "styled-components"
import { Container } from "../styles/Container"
import Logo from "./Logo"
import CartIcon from "./CartIcon"

export default props => (
  <Header as="header">
    <Logo isHomepage={props.isHomepage} />
    <CartIcon />
  </Header>
)

const Header = styled(Container)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  @media only screen and (min-width: 901px) {
    height: 7vw;
  }
`
