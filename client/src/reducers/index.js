import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productReducer } from "./products";
import { sellerReducer } from "./sellers";
import { categoriesReducer } from "./categories"
import { SingleProductReducer } from "./product";

export const reducers = combineReducers({
  user: authReducer,
  getAllProductsByCategory: productReducer,
  getAllSellers: sellerReducer,
  getAllCategories: categoriesReducer,
  singleProductReducer:SingleProductReducer
});
