import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ price, quantity, title, onremoveFromCartClicked }) => (
  <div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
    <hr />
  </div>
);

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onremoveFromCartClicked: PropTypes.func,
};

export default CartItem;
