import { productsTypes } from "./products.types";
import { changeFamilyHead } from "./products.utils";

const INITIAL_STATE = {
  items: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.LOAD_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case productsTypes.CHANGE_FAMILY_HEAD:
      return {
        ...state,
        items: changeFamilyHead(state.items, action.family, action.id),
      };
    default:
      return state;
  }
};

export default productsReducer;
