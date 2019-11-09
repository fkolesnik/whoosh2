import React from "react"
import { connect } from "react-redux"
import { toggleCart } from "../redux/cart/cart.actions"
import styled from "styled-components"
import { createStructuredSelector } from "reselect"
import { selectCartHidden } from "../redux/cart/cart.selectors"

import cart from "../img/icon-hanger.svg"
import close from "../img/icon-close.svg"

const CartIcon = ({ toggle, hidden }) => {
  return (
    <Wrap onClick={toggle}>
      <img src={hidden ? cart : close} width={22} alt="" />
    </Wrap>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCart()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)

const Wrap = styled.button`
  position: relative;
  z-index: 5;
  margin-left: auto;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  outline: none;
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`
