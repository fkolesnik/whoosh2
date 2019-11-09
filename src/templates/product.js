import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProductMedia from "../components/ProductMedia"
import Button from "../components/Button"
import Colors from "../components/Colors"
import Sizes from "../components/Sizes"

export default props => {
  const product = props.data.productsJson
  return (
    <Layout>
      <Wrap>
        <ProductMedia images={product.images} video={product.video} />
        <TextCol>
          <div className="sticky">
            <h1>
              <div dangerouslySetInnerHTML={{ __html: product.title }} />
              <small>{product.price}₽</small>
            </h1>
            <Colors family={product.family} />
            <Sizes sizes={product.sizes}/>
            <Button>Купить</Button>
            <p dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </TextCol>
      </Wrap>
    </Layout>
  )
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
`

const TextCol = styled.div`
  padding: 4rem 3rem;
  .sticky {
    position: sticky;
    top: 100px;
  }
  h1 {
    font-size: 2rem;
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
      sizes
      oldPrice
      video {
        publicURL
      }
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
