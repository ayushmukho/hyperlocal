/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL_PRODUCTS, START_LOADING, END_LOADING } from "../constants/actionTypes";


export default (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL_PRODUCTS: 
      return { ...state, products: action.payload }
    
    default:
      return state;
  }
}