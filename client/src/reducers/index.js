import { combineReducers } from "redux";
import { authReducer } from "./auth";

import { productReducer } from "./products";

export const reducers = combineReducers({
  user: authReducer,
  getAllProducts: productReducer,
});
