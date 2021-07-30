import React from "react";
import { dummy_count_data } from "../../utils/constants";

export const BottomTabOne = () => {
  return (
    <div className="bg-warning">
      {dummy_count_data.map((item, index) => (
        <h1 key={index} className="text-center">
          BOTTOM TAB ONE {item}
        </h1>
      ))}
    </div>
  );
};

export const BottomTabTwo = () => {
  return (
    <div className="bg-warning">
      {dummy_count_data.map((item, index) => (
        <h1 key={index} className="text-center">
          BOTTOM TAB TWO {item}
        </h1>
      ))}
    </div>
  );
};

export const BottomTabThree = () => {
  return (
    <div className="bg-warning">
      {dummy_count_data.map((item, index) => (
        <h1 key={index} className="text-center">
          BOTTOM TAB THREE {item}
        </h1>
      ))}
    </div>
  );
};
