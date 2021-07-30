import React from "react";
import { useHistory } from "react-router-dom";

const Help = () => {
  const history = useHistory();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">Help</h1>
      </div>
    </div>
  );
};

export default Help;
