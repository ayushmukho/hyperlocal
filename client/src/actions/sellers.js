import {
  END_LOADING,
  FETCH_ALL_SELLERS,
  START_LOADING,
} from '../constants/actionTypes.js'
import * as api from '../api/index.js'

export const getSellers = () => async (dispatch) => {
  dispatch({ type: START_LOADING })

  const {
    data: { data },
  } = await api.fetchSellers()
  dispatch({ type: FETCH_ALL_SELLERS, payload: data })

  dispatch({ type: END_LOADING })
}
