import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/ActionTypes";

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    case REMOVE_FROM_CART: {
      return { ...state, inventory: state.inventory + action.inventory };
    }
    default:
      return state;
  }
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
    case REMOVE_FROM_CART: {
      state[productId].inventory = state[productId].inventory + inventory;
      return { ...state };
    }
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
