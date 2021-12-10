/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL_PRODUCTS_BY_CATEGORY, START_LOADING, END_LOADING } from "../constants/actionTypes";

export const productReducer =  (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL_PRODUCTS_BY_CATEGORY: 
      return { ...state, products: action.payload }
    
    default:
      return state;
  }
}