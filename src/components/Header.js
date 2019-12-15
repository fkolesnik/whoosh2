import React from "react";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import { Box } from "../styles/Styles";

const Header = () => (
  <Box
    as="header"
    p={[3, 4]}
    position="fixed"
    zIndex={150}
    top={0}
    left={0}
    width="100%"
    display="flex"
    alignItems="center"
  >
    <Logo />
    <CartIcon />
  </Box>
);

export default Header;
