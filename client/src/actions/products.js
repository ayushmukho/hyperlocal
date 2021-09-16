import { END_LOADING, FETCH_ALL_PRODUCTS, START_LOADING } from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: START_LOADING });
  
  const response = await api.fetchProducts();
  dispatch({ type: FETCH_ALL_PRODUCTS, payload: response.data });
  
  dispatch({ type: END_LOADING });
};
