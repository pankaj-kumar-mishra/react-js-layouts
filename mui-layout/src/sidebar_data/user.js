import React from "react";
import * as MdIcons from "react-icons/md";

const data = [
  {
    title: "Home",
    path: "/home",
    icon: <MdIcons.MdHome />,
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <MdIcons.MdSettings />,
  },
  {
    title: "Help",
    path: "/help",
    icon: <MdIcons.MdHelp />,

    subMenu: [
      {
        title: "Payments",
        path: "/help/payments",
        icon: <MdIcons.MdAttachMoney />,
      },
      {
        title: "Products",
        path: "/help/products",
        icon: <MdIcons.MdShopTwo />,
      },
    ],
  },
  {
    title: "NavbarSidebar Demo",
    path: "/navbarsidebar",
    icon: <MdIcons.MdHome />,
  },
  {
    title: "Bottom Tab Demo",
    path: "/bottomtab-one",
    icon: <MdIcons.MdHome />,
  },
];

export default data;
