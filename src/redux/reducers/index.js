import { combineReducers } from "redux";
import {
  addToCart,
  productsReducers,
  selectedProduct,
} from "./product_reducers";

// combine all the reducers

const reducers = combineReducers({
  allproduct: productsReducers,
  product: selectedProduct,
  cart: addToCart,
});

export default reducers;
