import React from "react";
import * as MdIcons from "react-icons/md";

const data = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdDashboard />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <MdIcons.MdPeople />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdIcons.MdShoppingBasket />,

    subMenu: [
      {
        title: "Mobiles",
        path: "/products/mobiles",
        icon: <MdIcons.MdStayCurrentPortrait />,
      },
      {
        title: "Laptops",
        path: "/products/laptops",
        icon: <MdIcons.MdLaptop />,
      },
      {
        title: "Others",
        path: "/products/others",
        icon: <MdIcons.MdGamepad />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <MdIcons.MdHelp />,

    subMenu: [
      {
        title: "Customers",
        path: "/support/customers",
        icon: <MdIcons.MdPerson />,
      },
      {
        title: "Sellers",
        path: "/support/sellers",
        icon: <MdIcons.MdShopTwo />,

        subMenu: [
          {
            title: "Electronics",
            path: "/support/sellers/electronics",
            icon: <MdIcons.MdFlashOn />,
          },
          {
            title: "Cosmetics",
            path: "/support/sellers/cosmetics",
            icon: <MdIcons.MdFace />,
          },
        ],
      },
    ],
  },
  {
    title: "SidebarNavbar Demo",
    path: "/sidebarnavbar",
    icon: <MdIcons.MdDashboard />,
  },
];

export default data;
