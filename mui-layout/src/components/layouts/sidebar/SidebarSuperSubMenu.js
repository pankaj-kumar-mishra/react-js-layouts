import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import * as MdIcons from "react-icons/md";

const AlignDiv = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownSubLink = styled(Link)`
  background: yellow;
  height: 2.5rem;
  padding: 0.5rem 2rem 0.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  border-bottom: 1px solid #000;
  transition: 1s;

  &:hover {
    background: blue;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
  }

  ${({ isactive }) =>
    isactive === "yes" &&
    css`
      background: blue;
      color: #fff;
    `}
`;

const SidebarSuperSubMenu = (props) => {
  const { ssItem } = props;

  // console.log(">>>>>>", window.location.pathname);

  const handleSubmenu = () => {
    if (ssItem.subMenu) {
      ssItem.show_submenu = ssItem.show_submenu ? false : true;
    }
  };

  return (
    <div>
      <DropdownSubLink
        isactive={window.location.pathname === ssItem.path ? "yes" : "no"}
        to={ssItem.path}
        //onClick={handleSubmenu}
      >
        <AlignDiv>
          {ssItem.icon}
          <span className="ml-2">{ssItem.title}</span>
        </AlignDiv>
        {/* <>
          {ssItem.subMenu && ssItem.show_submenu ? (
            <MdIcons.MdExpandLess size={20} />
          ) : ssItem.subMenu ? (
            <MdIcons.MdExpandMore size={20} />
          ) : null}
        </> */}
      </DropdownSubLink>
      {/* <Collapse in={ssItem.show_submenu}>
        {ssItem.subMenu &&
          ssItem.subMenu.map((ss2Item, index) => (
            <SidebarSuperSubMenu2 key={index} ss2Item={ss2Item} />
          ))}
      </Collapse> */}
    </div>
  );
};

SidebarSuperSubMenu.propTypes = {
  ssItem: PropTypes.object,
};

// SidebarSubMenu.defaultProps = {};

export default SidebarSuperSubMenu;
