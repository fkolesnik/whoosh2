import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({product}) => {
  return (
    <Wrap>
      <Img
        fluid={product.hero.childImageSharp.fluid}
        imgStyle={{ objectPosition: "center top" }}
        style={{ height: "100%", top: 0 }}
        alt=""
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
