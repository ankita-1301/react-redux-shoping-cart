import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartProduct from "../cartItem/CartItem";
import { removeFromCart } from "../../actions";

const Cart = ({ products, total, onCheckoutClicked, removeFromCart }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <CartProduct
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.sku}
        onremoveFromCartClicked={() =>
          removeFromCart(product.sku, product.quantity)
        }
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
      <button
        className="app-button"
        style={{ background: total > 0 ? "#00b372" : "#ed3f00" }}
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
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

export default connect(mapStateToProps, { removeFromCart })(Cart);
