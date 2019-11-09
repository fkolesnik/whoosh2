import React from "react"
import styled from "styled-components"

const Checkout = () => {
  return (
    <Wrap>
      <h1>Заказ</h1>
    </Wrap>
  )
}

export default Checkout

const Wrap = styled.div`
  position: fixed;
  width: 96vw;
  height: 96vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: #f5f5f5;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform: translateY(-100%);
  will-change: transform;
  animation: 0.25s slideIn ease-in-out both;

  @keyframes slideIn {
    100% {
      transform: translateY(0);
    }
  }
`
