import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { connect } from "react-redux";
import { loadProducts } from "../redux/products/products.actions";

const LoadProducts = ({ loadProducts }) => {
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
        loadProducts(data.allProductsJson.edges);
        return <React.Fragment />;
      }}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  loadProducts: products => dispatch(loadProducts(products))
});

export default connect(null, mapDispatchToProps)(LoadProducts);
