import { productsTypes } from "./products.types";

export const loadProducts = payload => ({
  type: productsTypes.LOAD_PRODUCTS,
  payload,
});

export const changeFamilyHead = (family, id) => ({
  type: productsTypes.CHANGE_FAMILY_HEAD,
  family,
  id,
});
