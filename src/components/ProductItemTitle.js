import React from "react"
import { Link } from "gatsby"

export default props => {
  const { title, slug, price } = props.product
  return (
    <>
      <h2>
        <Link to={`/${slug}`}>
          <div dangerouslySetInnerHTML={{ __html: title }} />
          <small>{price}₽</small>
        </Link>
      </h2>
    </>
  )
}
