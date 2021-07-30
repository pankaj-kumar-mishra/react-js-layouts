import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Common from "../layouts/Common";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Products from "../pages/admin/Products";
import Support from "../pages/admin/Support";
import Signin from "../pages/common/Signin";
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import SupportDetail from "../pages/admin/SupportDetail";
import NotFound from "../pages/common/NotFound";
import SidebarNavbarDemo from "../pages/admin/SidebarNavbarDemo";
import SidebarNavbar from "../layouts/SidebarNavbar";
import HooksList from "../pages/admin/hooks/HooksList";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  const { user_data } = useSelector(
    (state) => ({
      user_data: state.auth.user_data,
    }),
    shallowEqual
  );

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
    component: () => <PrivateRoute to="/dashboard" component={Dashboard} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/dashboard",
    component: () => <PrivateRoute to="/dashboard" component={Dashboard} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/users",
    component: () => <PrivateRoute to="/users" component={Users} />,
    exact: true,
    layout: Sidebar,
  },
  // PART Hooks concept
  {
    path: "/hookslist",
    component: () => <PrivateRoute to="/hookslist" component={HooksList} />,
    exact: true,
    layout: Sidebar,
  },
  // END Hooks
  {
    path: "/products",
    component: () => <PrivateRoute to="/products" component={Products} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/products/:prod",
    component: () => <PrivateRoute to="/products/:prod" component={Products} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/support",
    component: () => <PrivateRoute to="/support" component={Support} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/support/:type",
    component: () => <PrivateRoute to="/support/:type" component={Support} />,
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/support/:type/:prod",
    component: () => (
      <PrivateRoute to="/support/:type/:prod" component={SupportDetail} />
    ),
    exact: true,
    layout: Sidebar,
  },
  {
    path: "/sidebarnavbar",
    component: () => (
      <PrivateRoute to="/sidebarnavbar" component={SidebarNavbarDemo} />
    ),
    exact: true,
    layout: SidebarNavbar,
  },
  //   NOTE only navigate back to login
  {
    path: "/signin",
    component: () => <PublicRoute to="/signin" component={Signin} />,
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
