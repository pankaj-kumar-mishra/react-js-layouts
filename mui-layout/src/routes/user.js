import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Common from "../layouts/Common";
import Home from "../pages/user/Home";
import Setting from "../pages/user/Setting";
import Help from "../pages/user/Help";
import Signin from "../pages/common/Signin";
import SidebarNavbar from "../layouts/SidebarNavbar";
import NavbarSidebar from "../layouts/NavbarSidebar";
import Navbar from "../layouts/Navbar";
import HelpDetail from "../pages/user/HelpDetail";
import NotFound from "../pages/common/NotFound";
import NavbarSidebarDemo from "../pages/user/NavbarSidebarDemo";
import {
  BottomTabOne,
  BottomTabThree,
  BottomTabTwo,
} from "../pages/user/BottomTabDemo";
import TopBottomNav from "../layouts/TopBottomNav";

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
    component: () => <PrivateRoute to="/home" component={Home} />,
    exact: true,
    layout: Navbar,
  },
  {
    path: "/home",
    component: () => <PrivateRoute to="/home" component={Home} />,
    exact: true,
    layout: Navbar,
  },
  {
    path: "/setting",
    component: () => <PrivateRoute to="/setting" component={Setting} />,
    exact: true,
    layout: Navbar,
  },
  {
    path: "/help",
    component: () => <PrivateRoute to="/help" component={Help} />,
    exact: true,
    layout: Navbar,
  },
  {
    path: "/help/:type",
    component: () => <PrivateRoute to="/help/:type" component={HelpDetail} />,
    exact: true,
    layout: Navbar,
  },
  {
    path: "/navbarsidebar",
    component: () => (
      <PrivateRoute to="/navbarsidebar" component={NavbarSidebarDemo} />
    ),
    exact: true,
    layout: NavbarSidebar,
  },
  // MSG Bottom Tab Navigation
  {
    path: "/bottomtab-one",
    component: () => (
      <PrivateRoute to="/bottomtab-one" component={BottomTabOne} />
    ),
    exact: true,
    layout: TopBottomNav,
  },
  {
    path: "/bottomtab-two",
    component: () => (
      <PrivateRoute to="/bottomtab-two" component={BottomTabTwo} />
    ),
    exact: true,
    layout: TopBottomNav,
  },
  {
    path: "/bottomtab-three",
    component: () => (
      <PrivateRoute to="/bottomtab-three" component={BottomTabThree} />
    ),
    exact: true,
    layout: TopBottomNav,
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
