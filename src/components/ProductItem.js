import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import VideoBackground from "./VideoBackground"
import Button from "./Button"
import { Col, Row } from "../styles/Grid"

export default ({ product }) => {
  const { title, slug, price, hero } = product
  const autoPlay = JSON.parse(product.autoPlay)

  console.log(product.hero)
  return (
    <Wrap autoPlay>
      <Row>
        <Col span={2}/>
        <Col span={1}>
          <h2>
            <Link to={slug}>{title}</Link>
          </h2>
          <Button>Купить за {price}₽</Button>
        </Col>
      </Row>

      {autoPlay ? (
        <VideoBackground product={product} />
      ) : (
        <div
          style={{
            position: "absolute",
            zIndex: -10,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${hero.publicURL}) no-repeat center top / cover`,
          }}
        />
      )}
    </Wrap>
  )
}

const Wrap = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 1rem 1rem 4rem 1rem;
  a {
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }
`
