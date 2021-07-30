import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as MdIcons from "react-icons/md";
import NavbarAppLogo from "./NavbarAppLogo";
import NavbarSearch from "./NavbarSearch";
import { toggleSidebar } from "../../../redux/actions/app_A";
import MobileSidebar from "../sidebar/MobileSidebar";
import { navbar_height } from "../../../utils/constants";

const AppbarCover = styled.div`
  height: ${navbar_height};
`;

const CustomAppbar = styled(AppBar)`
  background-color: limegreen;
  height: ${navbar_height};
  justify-content: center;
`;

const MediumNavbar = () => {
  const dispatch = useDispatch();

  const [profileEl, setProfileEl] = useState(null);
  const [moreEl, setMoreEl] = useState(null);

  const openProfileMenu = (event) => {
    setProfileEl(event.currentTarget);
  };

  const closeProfileMenu = () => {
    setProfileEl(null);
  };

  const openMoreMenu = (event) => {
    setMoreEl(event.currentTarget);
  };

  const closeMoreMenu = () => {
    setMoreEl(null);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={profileEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(profileEl)}
      onClose={closeProfileMenu}
    >
      <MenuItem onClick={closeProfileMenu}>Profile</MenuItem>
      <MenuItem onClick={closeProfileMenu}>My account</MenuItem>
    </Menu>
  );

  const renderMoreMenu = (
    <Menu
      anchorEl={moreEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(moreEl)}
      onClose={closeMoreMenu}
    >
      <MenuItem>
        <MdIcons.MdMail color="green" size={25} className="mr-2" />
        Messages
      </MenuItem>
      <MenuItem>
        <Badge
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeContent={2}
          color="secondary"
          className="mr-2"
        >
          <MdIcons.MdNotifications color="green" size={25} />
        </Badge>
        Notifications
      </MenuItem>
      <MenuItem onClick={openProfileMenu}>
        <Avatar className="bg-success text-white mr-2">P</Avatar>
        Profile
      </MenuItem>
    </Menu>
  );

  const handleSidebar = () => {
    dispatch(toggleSidebar(true));
  };

  return (
    <AppbarCover>
      <CustomAppbar position="sticky">
        <Toolbar className="px-1 px-md-2">
          <div className="d-sm-inline d-md-none d-lg-none">
            <IconButton color="inherit" onClick={handleSidebar}>
              <MdIcons.MdMenu />
            </IconButton>
          </div>

          <NavbarAppLogo />
          <NavbarSearch />

          <div className="ms-auto d-none d-md-block d-lg-block">
            <IconButton color="inherit">
              <MdIcons.MdMail />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={2} color="secondary">
                <MdIcons.MdNotifications />
              </Badge>
            </IconButton>
            <IconButton onClick={openProfileMenu} color="inherit">
              <Avatar className="bg-success text-white">P</Avatar>
            </IconButton>
          </div>

          <div className="ms-auto d-sm-inline d-md-none d-lg-none">
            <IconButton onClick={openMoreMenu} color="inherit">
              <MdIcons.MdMoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </CustomAppbar>

      {/* PART SIDEBAR */}
      <MobileSidebar />

      {/* PART Popup Menu */}
      {/* NOTE order of render important (MSG top to bottom that is last one will on previous one) */}
      {renderMoreMenu}
      {renderProfileMenu}
    </AppbarCover>
  );
};

export default MediumNavbar;
