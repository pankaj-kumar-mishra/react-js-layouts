import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import * as MdIcons from "react-icons/md";
import SidebarSuperSubMenu from "./SidebarSuperSubMenu";

const AlignDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownLink = styled(Link)`
  background: black;
  height: 2.5rem;
  padding: 0.5rem 2rem 0.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  border-bottom: 1px solid white;
  transition: 1s;

  &:hover {
    background: red;
    color: yellow;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
  }

  ${({ isactive }) =>
    isactive === "yes" &&
    css`
      background: red;
      color: yellow;
    `}
`;

const SidebarSubMenu = (props) => {
  const { sItem } = props;

  // console.log(">>>>>>", window.location.pathname);

  const handleSubmenu = () => {
    if (sItem.subMenu) {
      sItem.show_submenu = sItem.show_submenu ? false : true;
    }
  };

  return (
    <div>
      <DropdownLink
        isactive={window.location.pathname === sItem.path ? "yes" : "no"}
        to={sItem.path}
        onClick={handleSubmenu}
      >
        <AlignDiv>
          {sItem.icon}
          <span className="ml-2">{sItem.title}</span>
        </AlignDiv>
        <>
          {sItem.subMenu && sItem.show_submenu ? (
            <MdIcons.MdExpandLess size={20} />
          ) : sItem.subMenu ? (
            <MdIcons.MdExpandMore size={20} />
          ) : null}
        </>
      </DropdownLink>
      <Collapse in={sItem.show_submenu}>
        {sItem.subMenu &&
          sItem.subMenu.map((ssItem, index) => (
            <SidebarSuperSubMenu key={index} ssItem={ssItem} />
          ))}
      </Collapse>
    </div>
  );
};

SidebarSubMenu.propTypes = {
  sItem: PropTypes.object,
};

// SidebarSubMenu.defaultProps = {};

export default SidebarSubMenu;
