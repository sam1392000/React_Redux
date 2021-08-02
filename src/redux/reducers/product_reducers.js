import { ActionTypes } from "../constants/action-types";

// state
const intialState = {
  products: [],
};

// reducers

export const productsReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const cart = {
  cart_product: [],
};
export const addToCart = (state = cart, { type, payload }) => {
  const { cart_product } = cart;
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      cart_product.push(payload);
      return { ...state };
    }

    default:
      return state;
  }
};
