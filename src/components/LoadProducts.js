import React from "react"
import { graphql, StaticQuery } from "gatsby"

const LoadProducts = ({ loadProducts }) => {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    if (products.length > 0) {
      loadProducts(products)
    }
  }, [products, loadProducts])

  return (
    <StaticQuery
      query={graphql`
        query {
          allProductsJson {
            edges {
              node {
                id
                title
                color
                family
                isFamilyHead
                slug
                price
                oldPrice
                hero {
                  childImageSharp {
                    fluid(
                      maxWidth: 1800
                      srcSetBreakpoints: [600, 1800]
                      quality: 90
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        setProducts(data.allProductsJson.edges)
        return <React.Fragment />
      }}
    />
  )
}

export default LoadProducts
