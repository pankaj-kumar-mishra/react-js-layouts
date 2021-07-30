import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import * as MdIcons from "react-icons/md";
import SidebarSubMenu from "./SidebarSubMenu";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  list-style: none;
  height: 3rem;
  text-decoration: none;
  font-size: 18px;
  border-bottom: 1px solid green;
  transition: 1s;

  &:hover {
    background: green;
    border-left: 5px solid red;
    text-decoration: none;
    cursor: pointer;
    color: yellow;
    transition: 0.5s;
  }

  ${({ isactive }) =>
    isactive === "yes" &&
    css`
      background: green;
      border-left: 5px solid red;
    `}
`;

const AlignDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SidebarMenu = (props) => {
  const location = useLocation();
  const { item } = props;

  // console.log(">>>>>>", window.location.pathname);
  // console.log("Location", location);

  const handleSubmenu = () => {
    if (item.subMenu) {
      item.show_submenu = item.show_submenu ? false : true;
    }
  };

  return (
    <div>
      <SidebarLink
        to={item.path}
        isactive={location.pathname === item.path ? "yes" : "no"}
        onClick={handleSubmenu}
      >
        <AlignDiv>
          {item.icon}
          <span className="ml-2">{item.title}</span>
        </AlignDiv>
        <>
          {item.subMenu && item.show_submenu ? (
            <MdIcons.MdExpandLess size={25} />
          ) : item.subMenu ? (
            <MdIcons.MdExpandMore size={25} />
          ) : null}
        </>
      </SidebarLink>
      {/* NOTE SUB MENU */}
      <Collapse in={item.show_submenu}>
        {item.subMenu &&
          item.subMenu.map((sItem, index) => (
            <SidebarSubMenu key={index} sItem={sItem} />
          ))}
      </Collapse>
    </div>
  );
};

SidebarMenu.propTypes = {
  item: PropTypes.object,
};

// SidebarMenu.defaultProps = {};

export default SidebarMenu;
