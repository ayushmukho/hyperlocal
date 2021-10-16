import { END_LOADING, FETCH_ALL_PRODUCTS_BY_CATEGORY, START_LOADING } from "../constants/actionTypes.js";
import * as api from "../api/index.js";

export const getProductsByCategory = (cat) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  
  const { data: { data }} = await api.fetchProductsByCategory(cat);
  dispatch({ type: FETCH_ALL_PRODUCTS_BY_CATEGORY, payload: data });
  
  dispatch({ type: END_LOADING });
};
