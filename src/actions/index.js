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
