import { createSelector } from "reselect"

const selectProducts = state => state.products

export const selectLoadProducts = createSelector(
  [selectProducts],
  products => products.items
)

export const selectLoadProductsForHomepage = createSelector(
  [selectLoadProducts],
  items => items.filter(({ node }) => JSON.parse(node.isFamilyHead))
)
