import {
  END_LOADING,
  FETCH_ALL_CATEGORIES,
  START_LOADING,
} from '../constants/actionTypes.js'
import * as api from '../api/index.js'

export const getCategories = () => async (dispatch) => {
  dispatch({ type: START_LOADING })

  const {data : { data }} = await api.fetchCategories()
  dispatch({ type: FETCH_ALL_CATEGORIES, payload: data })

  dispatch({ type: END_LOADING })
}
