import { combineReducers } from "redux";

import { productReducer } from "./products";

export const reducers = combineReducers({ 
  allProducts: productReducer 
});
