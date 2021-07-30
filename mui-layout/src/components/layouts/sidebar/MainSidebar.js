import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as MdIcons from "react-icons/md";
import SidebarMenu from "./SidebarMenu";
import admin from "../../../sidebar_data/admin";
import user from "../../../sidebar_data/user";
import { toggleSidebar } from "../../../redux/actions/app_A";
import SidebarAppLogo from "./SidebarAppLogo";
import MobileSidebar from "./MobileSidebar";

const IconCover = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  z-index: 200;
  background: green;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarCoverFixed = styled.div`
  background: limegreen;
  height: 100vh;
  z-index: 10;
`;

const MainSidebar = () => {
  const { user_data } = useSelector(
    (state) => ({
      user_data: state.auth.user_data,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const activeData = user_data
    ? user_data.role === "admin"
      ? admin
      : user
    : [];

  // console.log(">>>>>>", window.location.pathname);

  const handleSidebar = () => {
    dispatch(toggleSidebar(true));
  };

  return (
    <div>
      {/* MSG FOR MOBILE */}
      <div className="d-sm-inline d-md-none d-lg-none">
        <IconCover onClick={handleSidebar}>
          <MdIcons.MdMenu color="#fff" size="1.5rem" />
        </IconCover>
        <MobileSidebar />
      </div>
      {/* MSG FOR PC */}
      <SidebarCoverFixed className="d-none d-md-block d-lg-block">
        <SidebarAppLogo />
        {activeData.map((item, index) => (
          <SidebarMenu item={item} key={index} />
        ))}
      </SidebarCoverFixed>
    </div>
  );
};

export default MainSidebar;
