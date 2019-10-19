import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  console.log("data", data)

  return <Layout>{data.productsJson.title}</Layout>
}

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
    }
  }
`
