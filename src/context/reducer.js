export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.products,
      }
    default:
      return state
  }
}
