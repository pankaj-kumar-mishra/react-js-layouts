import React from "react";

const data = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];

const SidebarNavbarDemo = () => {
  return (
    <div className="bg-info">
      {data.map((item, index) => (
        <h1 key={index} className="text-center">
          SidebarNavbar Demo {item}
        </h1>
      ))}
    </div>
  );
};

export default SidebarNavbarDemo;
