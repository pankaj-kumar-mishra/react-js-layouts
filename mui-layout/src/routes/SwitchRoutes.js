import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import admin from "./admin";
import user from "./user";
import common from "./common";

const SwitchRoutes = () => {
  // MSG Check user is authetic or not, According to that change routes
  const { user_data } = useSelector(
    (state) => ({
      user_data: state.auth.user_data,
    }),
    shallowEqual
  );

  // console.log(user_data);

  const activeRoutes = user_data
    ? user_data.role === "admin"
      ? admin
      : user
    : common;

  return (
    <Switch>
      {activeRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={(props) => (
            <route.layout {...props}>
              <route.component {...props} />
            </route.layout>
          )}
        />
      ))}
    </Switch>
  );
};

export default SwitchRoutes;
