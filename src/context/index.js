import React from "react"

const defaultState = {
  products: [],
  loadProducts: () => {},
}

export const Context = React.createContext(defaultState)
export const Consumer = Context.Consumer

export const Provider = props => {
  const [products, setProducts] = React.useState([])

  const loadProducts = products => {
    setProducts(products)
  }

  const onColorChange = (family, id) => {
    let productsChanged = products.filter(({ node: product }) => {
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
    setProducts(productsChanged)
  }

  return (
    <Context.Provider value={{ products, loadProducts, onColorChange }}>
      {props.children}
    </Context.Provider>
  )
}
