import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import cart from "../img/icon-hanger.svg"

const Header = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  max-width: var(--global-width);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #f3f3f3;
  @media only screen and (max-width: 600px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`

const LogoLink = styled(Link)`
  color: rgba(255, 255, 255, 0.1);
  margin-right: auto;
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`
const CartButton = styled.button`
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

export default () => (
  <Header>
    <LogoLink to="/">
      <svg width="150" viewBox="0 0 393 75" xmlns="http://www.w3.org/2000/svg">
        <title>Whoosh Shop</title>
        <desc>Whoosh is a women clothes shop</desc>
        <path
          fill="#fff"
          d="M66.4 23.4h14.2l-14.9 49.6h-17.5l-7.2-23.9-.7-7.1-.8 7.1-7.2 23.9h-17.4l-14.9-49.6h14.2l10.3 35.9 10-35.9h11.5l10 36.1 10.4-36.1zm56.939-1.4c3.267 0 6.317.683 9.15 2.05 2.833 1.367 5.283 3.233 7.35 5.6 2.067 2.367 3.683 5.133 4.85 8.3 1.167 3.167 1.75 6.55 1.75 10.15v24.9h-13.5v-9.1c0-2.533.017-5.15.05-7.85.033-2.7.05-5.017.05-6.95 0-1.867-.3-3.7-.9-5.5-.6-1.8-1.433-3.383-2.5-4.75s-2.317-2.467-3.75-3.3c-1.433-.833-2.95-1.25-4.55-1.25-1.533 0-3 .283-4.4.85-1.4.567-2.633 1.4-3.7 2.5-1.067 1.1-1.917 2.483-2.55 4.15-.633 1.667-.95 3.633-.95 5.9v25.3h-13.9v-73h13.9v27.2c1.733-1.667 3.717-2.95 5.95-3.85 2.233-.9 4.783-1.35 7.65-1.35zm61.139 0c3.533 0 6.867.683 10 2.05 3.133 1.367 5.867 3.233 8.2 5.6 2.333 2.367 4.183 5.133 5.55 8.3 1.367 3.167 2.05 6.55 2.05 10.15 0 3.6-.683 6.983-2.05 10.15-1.367 3.167-3.217 5.933-5.55 8.3-2.333 2.367-5.067 4.233-8.2 5.6-3.133 1.367-6.467 2.05-10 2.05-3.6 0-6.967-.683-10.1-2.05-3.133-1.367-5.867-3.233-8.2-5.6-2.333-2.367-4.183-5.133-5.55-8.3-1.367-3.167-2.05-6.55-2.05-10.15 0-3.6.683-6.983 2.05-10.15 1.367-3.167 3.217-5.933 5.55-8.3 2.333-2.367 5.067-4.233 8.2-5.6 3.133-1.367 6.5-2.05 10.1-2.05zm0 40.1c1.667 0 3.217-.333 4.65-1 1.433-.667 2.7-1.583 3.8-2.75 1.1-1.167 1.967-2.567 2.6-4.2s.95-3.45.95-5.45-.317-3.867-.95-5.6c-.633-1.733-1.5-3.25-2.6-4.55-1.1-1.3-2.367-2.333-3.8-3.1-1.433-.767-2.983-1.15-4.65-1.15-1.667 0-3.233.383-4.7 1.15-1.467.767-2.75 1.8-3.85 3.1s-1.967 2.817-2.6 4.55c-.633 1.733-.95 3.6-.95 5.6 0 2 .317 3.817.95 5.45s1.5 3.033 2.6 4.2c1.1 1.167 2.383 2.083 3.85 2.75 1.467.667 3.033 1 4.7 1zm64.839-40.1c3.533 0 6.867.683 10 2.05 3.133 1.367 5.867 3.233 8.2 5.6 2.333 2.367 4.183 5.133 5.55 8.3 1.367 3.167 2.05 6.55 2.05 10.15 0 3.6-.683 6.983-2.05 10.15-1.367 3.167-3.217 5.933-5.55 8.3-2.333 2.367-5.067 4.233-8.2 5.6-3.133 1.367-6.467 2.05-10 2.05-3.6 0-6.967-.683-10.1-2.05-3.133-1.367-5.867-3.233-8.2-5.6-2.333-2.367-4.183-5.133-5.55-8.3-1.367-3.167-2.05-6.55-2.05-10.15 0-3.6.683-6.983 2.05-10.15 1.367-3.167 3.217-5.933 5.55-8.3 2.333-2.367 5.067-4.233 8.2-5.6 3.133-1.367 6.5-2.05 10.1-2.05zm0 40.1c1.667 0 3.217-.333 4.65-1 1.433-.667 2.7-1.583 3.8-2.75 1.1-1.167 1.967-2.567 2.6-4.2s.95-3.45.95-5.45-.317-3.867-.95-5.6c-.633-1.733-1.5-3.25-2.6-4.55-1.1-1.3-2.367-2.333-3.8-3.1-1.433-.767-2.983-1.15-4.65-1.15-1.667 0-3.233.383-4.7 1.15-1.467.767-2.75 1.8-3.85 3.1s-1.967 2.817-2.6 4.55c-.633 1.733-.95 3.6-.95 5.6 0 2 .317 3.817.95 5.45s1.5 3.033 2.6 4.2c1.1 1.167 2.383 2.083 3.85 2.75 1.467.667 3.033 1 4.7 1zm71.939-15.1c3.667 2.6 5.5 6.3 5.5 11.1 0 2.2-.517 4.267-1.55 6.2-1.033 1.933-2.45 3.633-4.25 5.1-1.8 1.467-3.9 2.617-6.3 3.45-2.4.833-4.967 1.25-7.7 1.25-2.067 0-4.083-.267-6.05-.8-1.967-.533-3.783-1.267-5.45-2.2-1.667-.933-3.117-2.05-4.35-3.35-1.233-1.3-2.15-2.75-2.75-4.35 1.533-.733 3.233-1.55 5.1-2.45 1.867-.9 3.5-1.717 4.9-2.45.6 1 1.533 1.917 2.8 2.75s3 1.25 5.2 1.25c2.267 0 3.933-.533 5-1.6 1.067-1.067 1.6-2.067 1.6-3 0-.667-.367-1.283-1.1-1.85-.733-.567-1.567-1.017-2.5-1.35-1.333-.533-2.433-.817-3.3-.85-.867-.033-1.867-.217-3-.55-3.6-.867-6.35-2.017-8.25-3.45-1.9-1.433-3.283-2.883-4.15-4.35-.867-1.467-1.35-2.867-1.45-4.2-.1-1.333-.15-2.4-.15-3.2 0-2.133.467-4.167 1.4-6.1.933-1.933 2.217-3.617 3.85-5.05 1.633-1.433 3.533-2.583 5.7-3.45 2.167-.867 4.483-1.3 6.95-1.3 2.067 0 4.033.3 5.9.9 1.867.6 3.567 1.433 5.1 2.5 1.533 1.067 2.85 2.333 3.95 3.8 1.1 1.467 1.917 3.1 2.45 4.9l-10.7 3.6c-.4-1.2-1.217-2.167-2.45-2.9-1.233-.733-2.55-1.1-3.95-1.1-1.4 0-2.533.467-3.4 1.4-.867.933-1.3 1.867-1.3 2.8 0 1.133.417 2.017 1.25 2.65s1.75 1.083 2.75 1.35c.733.133 1.45.25 2.15.35.7.1 1.383.217 2.05.35 2.333.533 4.35 1.133 6.05 1.8 1.7.667 3.183 1.467 4.45 2.4zm47.839-25c3.267 0 6.317.683 9.15 2.05 2.833 1.367 5.283 3.233 7.35 5.6 2.067 2.367 3.683 5.133 4.85 8.3 1.167 3.167 1.75 6.55 1.75 10.15v24.9h-13.5v-9.1c0-2.533.017-5.15.05-7.85.033-2.7.05-5.017.05-6.95 0-1.867-.3-3.7-.9-5.5-.6-1.8-1.433-3.383-2.5-4.75s-2.317-2.467-3.75-3.3c-1.433-.833-2.95-1.25-4.55-1.25-1.533 0-3 .283-4.4.85-1.4.567-2.633 1.4-3.7 2.5-1.067 1.1-1.917 2.483-2.55 4.15-.633 1.667-.95 3.633-.95 5.9v25.3h-13.9v-73h13.9v27.2c1.733-1.667 3.717-2.95 5.95-3.85 2.233-.9 4.783-1.35 7.65-1.35z"
        />
      </svg>
    </LogoLink>
    <CartButton>
      <img src={cart} width={22} alt="" />
    </CartButton>
  </Header>
)
