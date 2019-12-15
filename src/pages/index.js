import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import { createStructuredSelector } from "reselect";
import { selectLoadProductsForHomepage } from "../redux/products/products.selectors";
import ProductItem from "../components/ProductItem";

export const Homepage = ({ products }) => (
  <Layout>
    {products.map(({ node }) => (
      <ProductItem key={node.id} product={node} />
    ))}
  </Layout>
);

const mapStateToProps = createStructuredSelector({
  products: selectLoadProductsForHomepage
});

export default connect(mapStateToProps)(Homepage);
