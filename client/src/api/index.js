import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

/* @ACTIVATION-API */
export const activation=(id)=>API.post("/user/activation",{activation_token:id})

/* @SIGNUP-API */
export const signup = (formData) => API.post("/user/register", formData);
export const googleLogin = (token) => API.post("/user/google_login", {tokenid: token});

/* @SIGNIN-API */
export const signIn = (formData) => API.post("/user/login", formData);

/* @PRODUCT-API */
export const fetchProducts = () => API.get("/products");
export const fetchSingleProduct = (id) => API.get(`/products/${id}`);

/* @CART-API */
export const addToCart = (id) => API.get("/");