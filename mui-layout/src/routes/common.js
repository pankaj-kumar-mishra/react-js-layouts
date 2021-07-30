import React from "react";
import { Redirect, Route } from "react-router-dom";
import Common from "../layouts/Common";
import Dashboard from "../pages/admin/Dashboard";
import Landing from "../pages/common/Landing";
import NotFound from "../pages/common/NotFound";
import Signin from "../pages/common/Signin";
import Signup from "../pages/common/Signup";
import Home from "../pages/user/Home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user_data = null;
  //   const user_data = { name: "Pankaj", role: "admin" };
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  return (
    <Route
      {...rest}
      render={(props) =>
        user_data ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        restricted ? <Redirect to="/landing" /> : <Component {...props} />
      }
    />
  );
};

const routes = [
  {
    path: "/",
    component: () => <PublicRoute to="/landing" component={Landing} />,
    exact: true,
    layout: Common,
  },
  {
    path: "/landing",
    component: () => <PublicRoute to="/landing" component={Landing} />,
    exact: true,
    layout: Common,
  },
  {
    path: "/signin",
    component: () => <PublicRoute to="/signin" component={Signin} />,
    exact: true,
    layout: Common,
  },
  {
    path: "/signup",
    component: () => <PublicRoute to="/signup" component={Signup} />,
    exact: true,
    layout: Common,
  },

  // NOTE After login navigate to dashboard(admin) or home(user)
  {
    path: "/dashboard",
    component: () => <PrivateRoute to="/dashboard" component={Dashboard} />,
    exact: true,
    layout: Common,
  },
  {
    path: "/home",
    component: () => <PrivateRoute to="/home" component={Home} />,
    exact: true,
    layout: Common,
  },
  // MSG NOT PAGE FOUND
  {
    component: () => <PrivateRoute component={NotFound} />,
    layout: Common,
  },
];

export default routes;
