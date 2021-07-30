import React from "react";
import { useHistory, useParams } from "react-router-dom";

const HelpDetail = () => {
  const history = useHistory();
  const { type } = useParams();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">{type}</h1>
      </div>
    </div>
  );
};

export default HelpDetail;
