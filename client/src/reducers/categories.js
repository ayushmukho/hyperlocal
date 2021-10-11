/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_ALL_CATEGORIES,
  START_LOADING,
  END_LOADING,
} from '../constants/actionTypes'

export const categoriesReducer = (
  state = { isLoading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case FETCH_ALL_CATEGORIES:
      return { ...state, categories: action.payload }

    default:
      return state
  }
}
