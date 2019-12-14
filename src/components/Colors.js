import React from 'react'
import { Link } from 'gatsby'
import { changeFamilyHead } from '../redux/products/products.actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectLoadProducts } from '../redux/products/products.selectors'
import { Box, LabelCircle } from '../styles/Styles'

const Colors = ({ products, family, hover, dispatch }) => (
  <Box display="flex" mb={3}>
    {products
      .filter(({ node }) => node.family === family)
      .map(({ node }) => (
        <LabelCircle
          as={Link}
          mr={2}
          key={node.id}
          to={`/${node.slug}`}
          bg={node.color}
          selected={node.isFamilyHead}
          onMouseEnter={
            hover
              ? () => dispatch(changeFamilyHead(node.family, node.id))
              : null
          }
          onClick={() => dispatch(changeFamilyHead(node.family, node.id))}
        />
      ))}
  </Box>
)

const mapStateToProps = createStructuredSelector({
  products: selectLoadProducts,
})

export default connect(mapStateToProps)(Colors)
