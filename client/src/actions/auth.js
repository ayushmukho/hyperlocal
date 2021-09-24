import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index"
import { toast } from "react-toastify";

export const googleLogin = (token, router) => async (dispatch) => {
  try {
    const { data: { data } } = await api.googleLogin(token);
    dispatch({ type: AUTH, payload: data });
    router.push("/");
  } catch (error) {
    toast(error);
  }
}

export const login = (cred, router) => async (dispatch) => {
  try {
    const { data: { data } }= await api.signIn(cred);
    dispatch({ type: AUTH, payload: data });
    router.push("/");
  } catch (error) {
    toast(error);
  }
}
