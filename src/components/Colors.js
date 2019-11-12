import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { changeFamilyHead } from "../redux/products/products.actions"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectLoadProducts } from "../redux/products/products.selectors"

const Colors = ({ products, family, hover, dispatch }) => (
  <Wrap>
    {products
      .filter(({ node }) => node.family === family)
      .map(({ node }) => (
        <Color
          key={node.id}
          to={`/${node.slug}`}
          color={node.color}
          selected={node.isFamilyHead}
          onMouseEnter={
            hover
              ? () => dispatch(changeFamilyHead(node.family, node.id))
              : null
          }
          onClick={() => dispatch(changeFamilyHead(node.family, node.id))}
        />
      ))}
  </Wrap>
)

const mapStateToProps = createStructuredSelector({
  products: selectLoadProducts,
})

export default connect(mapStateToProps)(Colors)

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
