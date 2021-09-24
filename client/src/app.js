import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/authentication/SignIn/SignIn";

import SignUp from "./components/authentication/SignUp/SignUp";
import Products from "./components/Products/Products";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Activation from "./components/authentication/Activation";

const App = () => {
  const parcel = useSelector((state) => state.user);

  // console.log("Product: ", parcel.products)
  console.log("User: ", parcel);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/register" exact component={SignUp} />
          <Route path="/activate/:id" exact component={Activation} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
