import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors"
import { addItem, removeItem } from "../redux/cart/cart.actions"
import { LabelCircle } from "../styles/Styles"

const Checkout = ({ cartItems, total, dispatch }) => (
  <Wrap>
    <h1>
      Заказ{" "}
      {total > 0 && (
        <>
          на{" "}
          <span style={{ color: "#0d5df2" }}>
            {total}
            <small>₽</small>
          </span>
        </>
      )}
    </h1>

    {cartItems.map((item, i) => (
      <CartItem key={i}>
        <img src={item.images[0].childImageSharp.fluid.src} alt="" />
        <span dangerouslySetInnerHTML={{ __html: item.title }} />
        <LabelCircle>{item.size}</LabelCircle>

        <span>{item.price} руб.</span>
        <Control onClick={() => dispatch(removeItem(item))}>–</Control>
        <div>{item.quantity}</div>
        <Control onClick={() => dispatch(addItem(item))}>+</Control>
      </CartItem>
    ))}
  </Wrap>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout)

const Wrap = styled.div`
  position: fixed;
  width: 96vw;
  height: 96vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 0 1.5rem;
  background-color: #f5f5f5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    overflow: hidden;
    object-fit: cover;
    object-position: top;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin-right: 1rem;
  }
`

const Control = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`
