import React from "react"
import styled from "styled-components"

export default props => {
  const { poster, video } = props.product
  const autoPlay = JSON.parse(props.product.autoPlay)

  return (
    <Wrap>
      <Video
        poster={poster.publicURL}
        controls={false}
        autoPlay={autoPlay}
        loop
        muted
        playsInline
      >
        <source src={video.publicURL} type="video/mp4" />
      </Video>
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
  background-position: center;
  background-size: cover;
  backface-visibility: hidden;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%);
  background-size: cover;
`
