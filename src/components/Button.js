import React from "react"
import styled from "styled-components"

export default props => <Button to={props.to}>{props.children}</Button>

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  align-items: center;
  justify-content: center;
  //background-image: linear-gradient(135deg, #38b8f2 0%, #843cf6 100%);
  background-color: #0d5df2;
  border-radius: 0.3rem;
  border: none;
  color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.2rem;
  letter-spacing: 0.75px;
  filter: brightness(90%);
  transition: filter 0.3s;
  :hover {
    filter: brightness(100%);
  }
  @media only screen and (min-width: 600px) {
    display: inline-flex;
    width: auto;
  }
`
