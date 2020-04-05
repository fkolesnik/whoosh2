import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin: 0 auto;
  background-color: lightblue;
`;

export default ({ children }) => <Container>{children}</Container>;
