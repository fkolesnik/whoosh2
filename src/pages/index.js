import React from "react"
import { Consumer } from "../context"
import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"

export default () => (
  <Consumer>
    {value => {
      return (
        <Layout>
          {value.products
            .filter(({ node }) => JSON.parse(node.isFamilyHead))
            .map(({ node }) => (
              <ProductItem key={node.id} product={node} />
            ))}
        </Layout>
      )
    }}
  </Consumer>
)
