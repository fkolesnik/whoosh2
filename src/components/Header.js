import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../redux/cart/cart.selectors'
import Logo from './Logo'
import CartIcon from './CartIcon'
import Checkout from './Checkout'
import { Box } from '../styles/Styles'

const Header = ({ hidden }) => (
  <Box
    as="header"
    p={[3, 4]}
    position="fixed"
    zIndex={100}
    top={0}
    left={0}
    width="100%"
    display="flex"
    alignItems="center"
  >
    <Logo />
    <CartIcon />
    {!hidden && <Checkout />}
  </Box>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
