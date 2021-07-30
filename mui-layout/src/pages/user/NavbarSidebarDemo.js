import React from "react";
import { dummy_count_data } from "../../utils/constants";

const NavbarSidebarDemo = () => {
  return (
    <div>
      <div className="bg-info">
        {dummy_count_data.map((item, index) => (
          <h1 key={index} className="text-center">
            NavbarSidebar Demo {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default NavbarSidebarDemo;
