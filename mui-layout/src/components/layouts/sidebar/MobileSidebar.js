import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import * as MdIcons from "react-icons/md";
import { toggleSidebar } from "../../../redux/actions/app_A";
import admin from "../../../sidebar_data/admin";
import user from "../../../sidebar_data/user";
import SidebarAppLogo from "./SidebarAppLogo";
import SidebarMenu from "./SidebarMenu";

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
  cursor: pointer;
`;

const SidebarCover = styled.div`
  background: limegreen;
  width: 250px;
  height: 100vh;
`;

const Backdrop = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

const MobileSidebar = () => {
  const { user_data, is_sidebar_open } = useSelector(
    (state) => ({
      user_data: state.auth.user_data,
      is_sidebar_open: state.app.is_sidebar_open,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const activeData = user_data
    ? user_data.role === "admin"
      ? admin
      : user
    : [];

  const handleSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  return (
    <Drawer
      anchor="left"
      open={is_sidebar_open}
      onClose={handleSidebar}
      onKeyDown={handleSidebar}
      BackdropComponent={() => <Backdrop onClick={handleSidebar} />}
    >
      <SidebarCover onClick={handleSidebar}>
        <IconCover onClick={handleSidebar}>
          <MdIcons.MdClose color="#fff" size="1.5rem" />
        </IconCover>
        <SidebarAppLogo />
        {activeData.map((item, index) => (
          <SidebarMenu item={item} key={index} />
        ))}
      </SidebarCover>
    </Drawer>
  );
};

export default MobileSidebar;
