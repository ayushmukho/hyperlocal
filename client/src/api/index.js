import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

/* @ACTIVATION-API */
export const activation=(id)=>API.post("/auth/activation",{activation_token:id})
export const userByAccessToken=(access_token)=>API.get("/user/info", { headers: { Authorization: `Bearer ${access_token}` } })

/* @SIGNUP-API */
export const signup = (formData) => API.post("/auth/register", formData);
export const googleLogin = (token) => API.post("/auth/google_login", {tokenid: token});

/* @SIGNIN-API */
export const signIn = (formData) => API.post("/auth/login", formData);

/* @PRODUCT-API */
export const fetchProducts = () => API.get("/products");
export const fetchSingleProduct = (id) => API.get(`/products/${id}`);

/* @CART-API */
export const addToCart = (id) => API.get("/");

/* @SELLERS-API */
export const fetchSellers = () => API.get("/seller");

/* @CATEGORIES-API */
export const fetchCategories = () => API.get('/category')
