import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default props => {
  const { images, video } = props
  return (
    <Wrap>
      {images.map((item, index) => (
        <React.Fragment key={index}>
          {index === 1 && (
            <video muted autoPlay loop>
              <source src={video.publicURL} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
          <Img fluid={item.childImageSharp.fluid} />
        </React.Fragment>
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  grid-gap: 0.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
