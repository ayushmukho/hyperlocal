import { combineReducers } from "redux";
import { authReducer } from "./auth";

//import { cartReducers } from "./cart";
import { productReducer } from "./products";

export const reducers = combineReducers({
  user: authReducer,
 // cart: cartReducers,
  getAllProducts: productReducer,
  //getSingleProduct: productDetailsReducer,
});
