import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default props => {
  return (
    <Wrap>
      {props.products.map(({ node }) => (
        <Color
          onMouseEnter={() => props.onColorChange(node.family, node.id)}
          key={node.id}
          to={node.slug}
          color={node.color}
          selected={node.isFamilyHead}
        />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
`

const Color = styled(Link)`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  border: 3px solid ${props => (props.selected ? "white" : "none")};
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.color};
`
