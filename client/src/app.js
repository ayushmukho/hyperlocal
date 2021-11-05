import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/authentication/SignIn/SignIn";

import SignUp from "./components/authentication/SignUp/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Activation from "./components/authentication/Activation";
import LandingPage from "./components/LandingPage";
import { useEffect } from "react";
import { userByAccessToken } from "./actions/auth";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import Products from "./components/Products/Products";
import { getSellers } from "./actions/sellers";
import { getCategories } from "./actions/categories";
import "./app.css";
import ScrollToTop from "./utils/ScrollToTop";
import ForgotPassword from "./components/authentication/forgotPassword/ForgotPassword";
import Billing from './components/Billing'

const App = () => {
  const dispatch = useDispatch();
  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (access_token) {
      dispatch(userByAccessToken(access_token));
    }
  }, [access_token, dispatch]);

  useEffect(() => {
    dispatch(getSellers());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <PrivateRoute path='/user/profile' exact component={Profile} />
            <Route path='/register' exact component={SignUp} />
            <Route path='/user/activate/:id' exact component={Activation} />
            <Route path='/login' exact component={SignIn} />
            <Route path='/categories/:cat' exact component={Products} />
            <Route path='/user/reset/:id' exact component={ForgotPassword} />
            <Route path='/billing' exact component={Billing} />
          </Switch>
          <ToastContainer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  )
};

export default App;
