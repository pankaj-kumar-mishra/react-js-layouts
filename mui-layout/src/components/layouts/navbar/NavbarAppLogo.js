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
  color: #fff;

  img {
    width: 2.5rem;

    /* animation: ${rotate} 3s infinite linear; */
  }

  &:hover {
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
  }
`;

const NavbarAppLogo = () => {
  return (
    <Brand to="/" className="mr-2 mx-md-3">
      <img src={logo} alt="logo" />
    </Brand>
  );
};

export default NavbarAppLogo;
