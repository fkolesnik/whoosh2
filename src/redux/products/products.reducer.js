import { productsTypes } from "./products.types"

const INITIAL_STATE = {
  items: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.LOAD_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer
