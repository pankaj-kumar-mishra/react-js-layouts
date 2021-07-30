import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import logo from "../../../assets/images/logo.svg";
// const logo = require("../../../assets/images/logo.svg");

const rotate = keyframes`
  /* 100% {transform: rotate(360deg)} */
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 4rem;

  img {
    width: 3rem;

    /* animation: ${rotate} 3s infinite linear; */
  }

  &:hover {
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
  }
`;

const SidebarAppLogo = () => {
  return (
    <Brand to="/">
      <img src={logo} alt="logo" />
    </Brand>
  );
};

export default SidebarAppLogo;
