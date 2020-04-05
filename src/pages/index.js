import React, {useEffect} from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import {loadProducts} from "../redux/products/products.actions";
import { createStructuredSelector } from "reselect";
import { selectLoadProductsForHomepage } from "../redux/products/products.selectors";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

export const Homepage = ({ data, products, dispatch }) => {
  const sourcedProducts = data.allProductsJson.edges;

  useEffect(() => {
    dispatch(loadProducts(sourcedProducts));
  }, [dispatch, sourcedProducts])

  return (
      <Layout>
        {products.map(({ node }) => (
            <ProductItem key={node.id} product={node} />
        ))}
      </Layout>
  )
};

const mapStateToProps = createStructuredSelector({
  products: selectLoadProductsForHomepage,
});

export default connect(mapStateToProps)(Homepage);

export const query = graphql`
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
`;
