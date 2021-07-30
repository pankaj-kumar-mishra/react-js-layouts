import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// NOTE Custom hooks should be in separate file
const useTitle = (count) => {
  useEffect(() => {
    document.title = `${count} Users`;
  }, [count]);
};

const useCount = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const add = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return [count, add, minus, reset];
};

const CustomHook = (props) => {
  const [userCount, setUserCount] = useState(0);
  //   NOTE calling custom hook(useCount)
  // const [count, setCount] = useState(0);
  const [count, add, minus, reset] = useCount(10);

  //   NOTE calling custom hook(useTitle)
  useTitle(userCount);

  //   useEffect(() => {
  //     document.title = `${count} Users`;
  //   }, [count]);

  //   const add = () => {
  //     setCount((prev) => prev + 1);
  //   };
  //   const minus = () => {
  //     setCount((prev) => prev - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-center">
        <h4>{userCount}</h4>
        <button
          onClick={() => setUserCount(userCount + 1)}
          className="btn btn-sm btn-outline-danger mt-3"
        >
          Add User
        </button>
      </div>
      <div className="text-center">
        <h4>{count}</h4>
        <div className="d-flex align-items-center mt-3">
          <button onClick={add} className="btn btn-sm btn-success">
            Add
          </button>
          <button onClick={minus} className="btn btn-sm btn-warning mx-3">
            Minus
          </button>
          <button onClick={reset} className="btn btn-sm btn-danger">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

CustomHook.propTypes = {};

export default CustomHook;
