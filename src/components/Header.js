import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { createStructuredSelector } from "reselect"
import { selectCartHidden } from "../redux/cart/cart.selectors"

import { Container } from "../styles/Container"
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import Checkout from "./Checkout"

const Header = ({ hidden }) => (
  <Wrap as="header">
    <Logo />
    <CartIcon />
    {!hidden && <Checkout />}
  </Wrap>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)

const Wrap = styled(Container)`
  position: fixed;
  z-index: 100;
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
