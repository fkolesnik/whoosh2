import styled from "styled-components"
import cart from "../img/icon-hanger.svg"
import React from "react"

export default () => {
  return (
    <Wrap>
      <img src={cart} width={22} alt="" />
    </Wrap>
  )
}

const Wrap = styled.button`
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
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`
