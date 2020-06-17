import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVisibleProducts } from "../reducers/products";
import ProductItem from "../components/productItem/ProductItem";
import data from "../api/products.json";

const ProductsContainer = ({ products }) => {
  return (
    <div className="product-container">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {products.map((product) => (
        <ProductItem key={product.sku} product={product} />
      ))}
    </div>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
});

export default connect(mapStateToProps, {})(ProductsContainer);
