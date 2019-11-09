import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Consumer } from "../context"

export default props => {
  const { family, hover } = props
  return (
    <Consumer>
      {value => {
        return (
          <Wrap>
            {value.products
              .filter(({ node }) => node.family === family)
              .map(({ node }) => (
                <Color
                  key={node.id}
                  to={`/${node.slug}`}
                  color={node.color}
                  selected={node.isFamilyHead}
                  onMouseEnter={
                    hover
                      ? () => value.onColorChange(node.family, node.id)
                      : null
                  }
                  onClick={() => value.onColorChange(node.family, node.id)}
                />
              ))}
          </Wrap>
        )
      }}
    </Consumer>
  )
}

const Wrap = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const Color = styled(Link)`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  border: 3px solid ${props => (props.selected ? "white" : "none")};
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.color};
`
