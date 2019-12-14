import React, { useState } from "react"
import { connect } from "react-redux"
import { addItem, toggleCart } from "../redux/cart/cart.actions"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ProductMedia from "../components/ProductMedia"
import Colors from "../components/Colors"
import { Box, T1, Button, LabelCircle } from "../styles/Styles"
import theme from "../styles/theme"

const ProductPage = ({ data, addItem, toggleCart }) => {
  const product = data.productsJson
  const { title, family, sizes, description, price, images, video } = product
  const [size, setSize] = useState("")

  const onBuy = (product, size) => {
    if (size && size !== "error") {
      const selectedProduct = { ...product, size }
      addItem(selectedProduct)
      toggleCart()
    } else {
      setSize("error")
    }
  }

  return (
    <Layout>
      <Box display="flex" flexWrap="wrap">
        <Box width={[1, "64%"]}>
          <ProductMedia images={images} video={video} />
        </Box>
        <Box width={[1, "36%"]}>
          <Box position="sticky" top={80} px={[2, 4]} pb={4}>
            <T1>
              <Box
                as="span"
                display="block"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Box as="small" color={theme.color.primary}>
                {price}₽
              </Box>
            </T1>
            <Colors family={family} />
            <Box mb={1}>
              {sizes.map(s => (
                <LabelCircle
                  as="button"
                  selected={s === size}
                  mr={2}
                  key={s}
                  onClick={() => setSize(s)}
                  error={size === "error"}
                >
                  {s}
                </LabelCircle>
              ))}
            </Box>
            <Box color="#ccc" mb={2} opacity={size === "error" ? 1 : 0}>
              Выберите размер
            </Box>
            <Box mb={5}>
              <Button onClick={() => onBuy(product, size)}>Купить</Button>
            </Box>
            <Box dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleCart: () => dispatch(toggleCart()),
})

export default connect(null, mapDispatchToProps)(ProductPage)

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      description
      colorLabel
      color
      family
      isFamilyHead
      slug
      price
      sizes
      oldPrice
      video {
        publicURL
      }
      images {
        childImageSharp {
          fluid(maxWidth: 1600, srcSetBreakpoints: [800, 1600], quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
