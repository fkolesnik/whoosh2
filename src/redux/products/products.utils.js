export const changeFamilyHead = (products, family, id) => {
  const productsChanged = products.filter(({ node: product }) => {
    if (product.family === family && product.id !== id) {
      product.isFamilyHead = false
      return product
    }
    if (product.id === id) {
      product.isFamilyHead = true
      return product
    }
    return product
  })

  return productsChanged
}
