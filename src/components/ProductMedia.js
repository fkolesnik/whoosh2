import React from "react"
import Img from "gatsby-image"
import { Box } from "../styles/Styles"

export default props => {
  const { images, video } = props
  return (
    <Box display="flex" flexWrap="wrap">
      {images.map((item, i) => (
        <Box key={i} width={[1, "50%"]} pr={[0, 1]} pb={1}>
          <Img fluid={item.childImageSharp.fluid} />
        </Box>
      ))}
      <Box width={[1, "50%"]} pr={[0, 1]} pb={1}>
        <video
          loop
          muted
          autoPlay
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={video.publicURL} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </Box>
    </Box>
  )
}