import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"

export default ({ data }) => {
  return (
    <Layout>
      {data.allProductsJson.edges.map(({ node }) => (
        <ProductItem key={node.id} product={node} />
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
          price
          slug
          title
          autoPlay
          hero {
            publicURL
          }
          video {
            publicURL
          }
          poster {
            publicURL
          }
        }
      }
    }
  }
`
