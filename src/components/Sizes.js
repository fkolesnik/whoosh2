import React from 'react'
import { Box } from '../styles/Styles'

export default props => {
  return (
    <Box mb={4}>
      {props.sizes.map(size => (
        <span key={size}>{size}</span>
      ))}
    </Box>
  )
}
