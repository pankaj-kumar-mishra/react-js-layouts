import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Products = () => {
  const history = useHistory();
  const { prod } = useParams();

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">{prod ? prod : "Products"}</h1>
      </div>
    </div>
  );
};

export default Products;
