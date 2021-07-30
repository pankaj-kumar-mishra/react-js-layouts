import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
