import React from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">Signup</h1>
      </div>
    </div>
  );
};

export default Signup;
