import React from "react";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">Signin</h1>
      </div>
    </div>
  );
};

export default Signin;
