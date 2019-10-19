import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"

export default ({ data }) => {
  const [products, setProducts] = React.useState(data.allProductsJson.edges)

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
    <Layout>
      {products
        .filter(({ node }) => JSON.parse(node.isFamilyHead))
        .map(({ node }) => (
          <ProductItem
            key={node.id}
            product={node}
            products={products}
            onColorChange={onColorChange}
          />
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          id
          title
          description
          color
          family
          isFamilyHead
          slug
          price
          oldPrice
          sizes
          hasHeroVideo
          video {
            publicURL
          }
          poster {
            publicURL
          }
          hero {
            childImageSharp {
              fluid(
                maxWidth: 1800
                srcSetBreakpoints: [600, 1800]
                quality: 90
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
