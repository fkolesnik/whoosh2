import React from "react";
import { connect } from "react-redux";
import { Link } from "gatsby";
import styled from "styled-components";
import theme from "../styles/theme";
import { T2, T1, Box } from "../styles/Styles";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import { addItem, removeItem, toggleCart } from "../redux/cart/cart.actions";
import CartForm from "./CartForm";

const Cart = ({ cartItems, total, dispatch }) => (
  <>
    <T1 as="h2" mt={0}>
      Заказ{" "}
      {total > 0 && (
        <>
          на{" "}
          <Box as="span" color={theme.color.primary}>
            {total}₽
          </Box>
        </>
      )}
    </T1>
    {cartItems.length === 0 ? (
      <Box>
        <T2 lineHeight={1.35} py={3}>
            У вас нет заказов. <br/>
            <Link onClick={() => dispatch(toggleCart())} to='/'>Выберите что-нибудь</Link>
        </T2>
      </Box>
    ) : (
      <>
        <Box mb={3}>
          {cartItems.map((item, i) => {
            const srcSet = item.images[0].childImageSharp.fluid.srcSet;
            const thumbPath = srcSet.substr(0, srcSet.indexOf(" "));
            return (
              <CartItem key={i}>
                <Box
                  display="flex"
                  as={Link}
                  to={`/${item.slug}`}
                  onClick={() => dispatch(toggleCart())}
                >
                  <img src={thumbPath} alt="" />
                </Box>
                <Box
                  fontSize={[1, 2]}
                  lineHeight={1.25}
                  as="span"
                  mr={2}
                  dangerouslySetInnerHTML={{
                    __html: `${item.title}&nbsp;·&nbsp;${item.size}`
                  }}
                />
                <Box ml="auto" display="flex">
                  <Control onClick={() => dispatch(removeItem(item))}>
                    −
                  </Control>
                  <Quantity fontSize={[1, 2]}>{item.quantity}</Quantity>
                  <Control
                    disabled={item.quantity > 9}
                    onClick={() => dispatch(addItem(item))}
                  >
                    +
                  </Control>
                </Box>
              </CartItem>
            );
          })}
        </Box>
        <CartForm />
      </>
    )}
  </>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Cart);

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    overflow: hidden;
    object-fit: cover;
    object-position: top;
    box-shadow: ${theme.shadow};
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const Control = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  outline: none;
  flex-shrink: 0;
  color: #ccc;
  transition: all 0.2s;
  opacity: ${props => (props.disabled ? 0 : 1)};
  &:hover {
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Quantity = styled.div`
  width: 30px;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
`;
