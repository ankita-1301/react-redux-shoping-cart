import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartProduct from "../cartProduct/CartItem";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.sku}
      />
    ))
  ) : (
    <em>Your cart is empty !</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};

const mapStateToProps = () => ({
  /* Map to the state if necessary */
  // products: getVisibleProducts(state.products),
});

export default connect(mapStateToProps, {})(Cart);
