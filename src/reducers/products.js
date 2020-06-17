import { combineReducers } from "redux";
import { RECEIVE_PRODUCTS } from "../constants/ActionTypes";

const products = (state, action) => {
  return state;
};

const byId = (state = {}, action) => {
  const { productId, inventory } = action;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.variants.reduce((obj, product) => {
          obj[product.sku] = product;
          return obj;
        }, {}),
      };
    default:
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.variants.map((product) => product.sku);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));
