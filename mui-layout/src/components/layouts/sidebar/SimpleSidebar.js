import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import SidebarMenu from "./SidebarMenu";
import admin from "../../../sidebar_data/admin";
import user from "../../../sidebar_data/user";
import SidebarAppLogo from "./SidebarAppLogo";

const SidebarCoverFixed = styled.div`
  background: limegreen;
  height: 100vh;
  z-index: 10;
`;

const SimpleSidebar = () => {
  const { user_data } = useSelector(
    (state) => ({
      user_data: state.auth.user_data,
    }),
    shallowEqual
  );

  const activeData = user_data
    ? user_data.role === "admin"
      ? admin
      : user
    : [];

  // console.log(">>>>>>", window.location.pathname);

  return (
    <SidebarCoverFixed className="d-none d-md-block d-lg-block">
      <SidebarAppLogo />
      {activeData.map((item, index) => (
        <SidebarMenu item={item} key={index} />
      ))}
    </SidebarCoverFixed>
  );
};

export default SimpleSidebar;
