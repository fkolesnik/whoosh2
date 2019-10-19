import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 600px) {
    width: ${props => (props.width ? props.width : "100%")};
  }
`
export const Col = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  padding-left: ${props => props.gap && ".5rem"};
  padding-right: ${props => props.gap && ".5rem"};
  @media screen and (min-width: 600px) {
    flex: ${props => (props.span ? props.span : 1)};
    justify-content: ${props => (props.y ? props.y : "flex-start")};
    align-items: ${props => (props.x ? props.x : "flex-start")};
  }
`
