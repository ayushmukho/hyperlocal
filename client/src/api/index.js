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

/* @PRODUCT-CATEGORY-API */
export const fetchProductsByCategory = (cat) => API.get(`/products/category/${cat}`);

/* @CART-API */
export const addToCart = (id) => API.get("/");

/* @SELLERS-API */
export const fetchSellers = () => API.get("/seller");

/* @CATEGORIES-API */
export const fetchCategories = () => API.get('/category')

/* @FORGOT PASSWORD-API */
export const forgotPassword=(email)=>API.post('/auth/forgot',{email})
export const confirmPassword=(token,password)=>API.post('/auth/reset',{access_token:token,password:password})