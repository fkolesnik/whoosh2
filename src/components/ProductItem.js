import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ProductItemBackground from "./ProductItemBackground"
import Colors from "./Colors"
import { Col, Row } from "../styles/Grid"

export default props => {
  const { title, slug, price } = props.product

  return (
    <Wrap>
      <Row>
        <Col span={4} />
        <Col span={4}>
          <h2>
            <Link to={slug}>
              <div dangerouslySetInnerHTML={{ __html: title }} />
              <small>{price}₽</small>
            </Link>
          </h2>
          <Colors
            onColorChange={props.onColorChange}
            products={props.products.filter(
              ({ node }) => node.family === props.product.family
            )}
          />
        </Col>
      </Row>
      <ProductItemBackground product={props.product} />
    </Wrap>
  )
}

const Wrap = styled.article`
  overflow: hidden;
  margin-bottom: 0.25rem;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 1rem 1rem 4rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  h2 {
    margin-bottom: 0.7rem;
    a {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
      color: white;
      small {
        color: #0d5df2;
        text-shadow: none;
      }
    }
  }
`
