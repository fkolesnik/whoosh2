import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  padding: 0.8rem 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #38b8f2 0%, #843cf6 100%);
  border-radius: 0.3rem;
  color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  border-color: transparent;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  filter: brightness(90%);
  transition: filter 0.3s;

  :hover {
    filter: brightness(100%);
  }
`;

export default (props) => <Button to={props.to}>{props.children}</Button>;
