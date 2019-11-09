import React from "react"

export default props => {
  return (
    <>
      {props.sizes.map(size => (
        <span key={size}>{size}</span>
      ))}
    </>
  )
}
