/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_ALL_SELLERS,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes'

export const sellerReducer = (
  state = { isLoading: true, sellers: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL_SELLERS:
      return { ...state, sellers: action.payload }

    default:
      return state
  }
}
