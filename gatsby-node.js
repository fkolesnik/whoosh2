const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allProductsJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allProductsJson } = result.data;

  allProductsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        id: node.id,
      },
    });
  });
};
