import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default props => {
  const { images } = props
  return (
    <Wrap>
      {images.map(item => (
        <Image
          fluid={item.childImageSharp.fluid}
          key={item.childImageSharp.fluid.src}
        />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  flex: 1 0 50%;
  max-width: 50%;
`
