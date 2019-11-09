import { productsTypes } from "./products.types"

export const loadProducts = payload => ({
  type: productsTypes.LOAD_PRODUCTS,
  payload,
})
