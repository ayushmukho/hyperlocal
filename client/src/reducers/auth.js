import { AUTH, GET_USER_BY_ACCESS_TOKEN, LOGOUT } from "../constants/actionTypes";

export const authReducer = (state = { authData: null, isLoading: true }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('access_token', action.payload.access_token);
      return { ...state, authData: action.payload.user, isLoading: false };
    case GET_USER_BY_ACCESS_TOKEN:
      return { ...state, authData: action.payload, isLoading: false }
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, isLoading: true };
    default:
      return state;
  }
};
