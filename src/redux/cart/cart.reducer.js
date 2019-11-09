import { cartTypes } from "./cart.types"
//import {addItemToCart, removeItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  //cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state
  }
}

export default cartReducer
