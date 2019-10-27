import React from "react"
import styled from "styled-components"
import ProductItemBackground from "./ProductItemBackground"
import ProductItemTitle from "./ProductItemTitle"
import { Container } from "../styles/Container"
import { Col, Row } from "../styles/Grid"
import Colors from "./Colors"

export default props => {
  return (
    <Wrap as="article">
      <Row>
        <Col span={4} />
        <Col span={4}>
          <ProductItemTitle product={props.product} />
          <Colors family={props.product.family} />
        </Col>
      </Row>
      <ProductItemBackground product={props.product} />
    </Wrap>
  )
}

const Wrap = styled(Container)`
  margin-bottom: 0.25rem;
  position: relative;
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.1);
  padding-bottom: 4rem;
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
