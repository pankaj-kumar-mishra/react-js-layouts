import React from "react";
import { useHistory } from "react-router-dom";

const Users = () => {
  const history = useHistory();

  return (
    <div className="bg-success vh-100">
      <h1
        onClick={() => history.push("/hookslist")}
        className="text-center fw-bold bg-dark text-white py-3 pointer"
      >
        Learn Hooks
      </h1>
    </div>
  );
};

export default Users;
