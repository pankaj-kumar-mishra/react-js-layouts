import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import * as MdIcons from "react-icons/md";
import styled from "styled-components";
import { bottom_navbar_height } from "../../../utils/constants";

const BottomNavCover = styled.div`
  height: ${bottom_navbar_height};
`;

const CustomBottomNav = styled(BottomNavigation)`
  background-color: limegreen;
  height: ${bottom_navbar_height};
  position: fixed;
  bottom: 0;
  width: 100%;

  .Mui-selected {
    color: green;
  }
`;

const CustomBottomNavAction = styled(BottomNavigationAction)`
  background-color: limegreen;
  color: #fff;

  &:hover {
    color: green;
    text-decoration: none;
  }
`;

const BottomNavbar = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);
  // const pathList = ["/bottomtab-one", "/bottomtab-two", "/bottomtab-three"];

  const pathList = [
    {
      title: "ONE",
      path: "/bottomtab-one",
      icon: <MdIcons.MdFavorite size={25} />,
    },
    {
      title: "TWO",
      path: "/bottomtab-two",
      icon: <MdIcons.MdLocationOn size={25} />,
    },
    {
      title: "THREE",
      path: "/bottomtab-three",
      icon: <MdIcons.MdFolder size={25} />,
    },
  ];

  useEffect(() => {
    // const activeValue = pathList.indexOf(pathname);
    const activeValue = pathList.findIndex((x) => x.path === pathname);
    if (activeValue > -1) {
      setValue(activeValue);
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavCover className="d-sm-inline d-md-none d-lg-none">
      <CustomBottomNav value={value} onChange={handleChange} showLabels>
        {pathList.map((item, index) => (
          <CustomBottomNavAction
            key={index}
            label={item.title}
            value={index}
            icon={item.icon}
            component={Link}
            to={item.path}
          />
        ))}
      </CustomBottomNav>
    </BottomNavCover>
  );
};

export default BottomNavbar;
