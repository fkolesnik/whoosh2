import styled from "styled-components"

export const Text = styled.p`
  margin: ${props => props.crop && 0};
  font-size: ${props => (props.size ? props.size : "1rem")};
  text-align: ${props => (props.x ? props.x : "left")};
`
