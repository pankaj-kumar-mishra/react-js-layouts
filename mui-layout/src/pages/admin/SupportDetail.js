import React from "react";
import { useHistory, useParams } from "react-router-dom";

const SupportDetail = () => {
  const history = useHistory();
  const { type, prod } = useParams();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">{`${type} => ${prod}`}</h1>
      </div>
    </div>
  );
};

export default SupportDetail;
