import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProductImages from "../components/ProductImages"
import Button from "../components/Button"
import Colors from "../components/Colors"

export default props => {
  const product = props.data.productsJson
  return (
    <Layout>
      <Wrap>
        <ImagesCol>
          <ProductImages images={product.images} />
        </ImagesCol>
        <TextCol>
          <h2>
            <div dangerouslySetInnerHTML={{ __html: product.title }} />
            <small>{product.price}₽</small>
          </h2>
          <Colors family={product.family} />
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
          <Button>Купить</Button>
        </TextCol>
      </Wrap>
    </Layout>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
`

const ImagesCol = styled.div`
  width: 100%;
  @media only screen and (min-width: 769px) {
    max-width: 65%;
    flex: 1 0 65%;
  }
`

const TextCol = styled.div`
  padding-top: 0;
  @media only screen and (min-width: 769px) {
    max-width: 35%;
    flex: 1 0 35%;
    padding-left: 2rem;
    position: sticky;
    top: 0;
  }
  small {
    color: #0d5df2;
    text-shadow: none;
  }
`

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      description
      colorLabel
      color
      family
      isFamilyHead
      slug
      price
      oldPrice
      images {
        childImageSharp {
          fluid(maxWidth: 1600, srcSetBreakpoints: [800, 1600], quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
