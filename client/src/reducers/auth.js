import { AUTH } from "../constants/actionTypes";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('access_token', action.payload.access_token);
      return { ...state, authData: action.payload.user, loading: false, errors: null };
    default:
      return state;
  }
};
