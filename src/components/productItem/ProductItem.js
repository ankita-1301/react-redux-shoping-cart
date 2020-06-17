import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => (
  <div className="product-item">
    <h4>
      {product.title} - &#36;{product.price}
    </h4>
    <button
      type="primary"
      style={{ background: product.inventory > 0 ? "#00b372" : "#ed3f00" }}
      disabled={product.inventory > 0 ? "" : "disabled"}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out !"}
    </button>
    {product.inventory ? ` ${product.inventory} in Stock!` : null}
    <hr />
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
