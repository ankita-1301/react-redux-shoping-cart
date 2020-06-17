import shop from "../api/shop";
import * as types from "../constants/ActionTypes";

/*
Redux Actions acting as middleware 
to dispatch data to stores
*/

//get all products
const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

//add a product to cart
const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (productId) {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId));
    }
  } else {
    /*If no Product ID then get the first element*/
    let firstObjIndex = Object.keys(getState().products.byId)[0];
    let firstObj = getState().products.byId[firstObjIndex];
    if (firstObj.inventory > 0) {
      dispatch(addToCartUnsafe(firstObjIndex));
    }
  }
};
