/* eslint-disable import/no-anonymous-default-export */
import { FETCH_SINGLE_PRODUCT, START_LOADING, END_LOADING } from "../constants/actionTypes";

export const SingleProductReducer =  (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_SINGLE_PRODUCT: 
      return { ...state, products: action.payload }
    default:
      return state;
  }
}