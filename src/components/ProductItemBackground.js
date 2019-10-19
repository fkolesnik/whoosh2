import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default props => {
  const { poster, video, hero, hasHeroVideo } = props.product

  return (
    <Wrap>
      {JSON.parse(hasHeroVideo) ? (
        <Video
          poster={poster.publicURL}
          controls={false}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video.publicURL} type="video/mp4" />
        </Video>
      ) : (
        <Img
          fluid={hero.childImageSharp.fluid}
          imgStyle={{ objectPosition: "center top" }}
          style={{ height: "100%", top: 0 }}
          alt=""
        />
      )}
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
