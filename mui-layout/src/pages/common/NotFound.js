import React from "react";
import { useHistory } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {transform: rotate(360deg)}
`;

const Div404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;

  p,
  #rotate--me {
    font-size: 5rem;
    color: #fff;
    margin: 0 0.5rem;
  }

  #rotate--me {
    animation: ${rotate} 3s infinite linear;
  }
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 vh-100 bg-danger text-center">
          <Div404>
            <p>4</p>
            <MdIcons.MdHelpOutline id="rotate--me" />
            <p>4</p>
          </Div404>
          <button
            onClick={() => history.push("/")}
            className="btn btn-dark mt-4"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
