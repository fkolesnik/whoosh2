import React from "react"
import styled from "styled-components"

export default props => <Wrap to={props.to}>{props.children}</Wrap>

const Wrap = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #0d5df2;
  border-radius: 50px;
  border: none;
  color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.75px;
  transition: background-color 0.3s;
  :hover {
    background-color: #0d48b4;
  }
  @media only screen and (min-width: 600px) {
    display: inline-flex;
    width: auto;
  }
`
