import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  if (user.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return user.authData ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
