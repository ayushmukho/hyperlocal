import { AUTH, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../constants/actionTypes";
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
    console.log(data)
   dispatch({ type: AUTH, payload: data });

    router.push("/");
  } catch (error) {
    toast(error);
  }
}

// export const login= (data) => async (dispatch) => {
  
//   dispatch({ type: LOGIN_START });
//   const {data:{
//    data:{access_token}
//   }} = await api.signIn(data);

//   dispatch({ type: LOGIN_SUCCESS,payload: access_token});
//   dispatch({ type: LOGIN_FAILED, payload:"error message"});
// };