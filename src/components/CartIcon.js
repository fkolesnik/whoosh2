import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../redux/cart/cart.actions";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import theme from "../styles/theme";
import {
  selectCartHidden,
  selectCartItemsCount
} from "../redux/cart/cart.selectors";
import Modal from "./Modal";
import Cart from "./Cart";
import cart from "../img/icon-hanger.svg";
import close from "../img/icon-close.svg";

const CartIcon = ({ toggle, hidden, count }) => {
  return (
    <>
      <Wrap onClick={toggle}>
        <img src={hidden ? cart : close} width={22} alt="" />
        {count > 0 && <Count>{count}</Count>}
      </Wrap>
      <Modal
        open={!hidden}
        toggle={toggle}
        title="Заказ"
        width={460}
        bg={theme.color.light}
      >
        <Cart />
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  count: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

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
  box-shadow: ${theme.shadow};
  cursor: pointer;
  outline: none;
  img {
    opacity: 0.25;
    transition: opacity 0.3s;
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const Count = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  min-width: 20px;
  height: 20px;
  display: inline-block;
  padding: 0 6px;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  color: #fff;
  background-color: #0d5df2;
  border-radius: 10px;
`;
