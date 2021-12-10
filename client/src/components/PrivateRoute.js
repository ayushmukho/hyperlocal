import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import BubblePreloader from "react-bubble-preloader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  if (user.isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "50%",
          left: "46%",
        }}
      >
        <BubblePreloader bubble={{ width: "3rem", height: "3rem" }} />;
      </div>
    );
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
