import { useState, useMemo } from "react";
import PropTypes from "prop-types";

const UseMemoHook = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const isYes1 = useMemo(() => {
    console.log("isYes1 checking.");
    return count1 > 5;
  }, [count1]);
  const isYes2 = useMemo(() => {
    console.log("isYes2 checking..");
    return count2 > 5;
  }, [count2]);
  const isYes3 = useMemo(() => {
    console.log("isYes3 checking...");
    return count3 > 5;
  }, [count3]);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-center">
        <h6>{isYes1 ? "YES" : "NO"}</h6>
        <h4>{count1}</h4>
        <button
          onClick={() => setCount1(count1 + 1)}
          className="btn btn-warning"
        >
          Add 1
        </button>
      </div>
      <div className="text-center">
        <h6>{isYes2 ? "YES" : "NO"}</h6>
        <h4>{count2}</h4>
        <button
          onClick={() => setCount2(count2 + 2)}
          className="btn btn-warning"
        >
          Add 2
        </button>
      </div>
      <div className="text-center">
        <h6>{isYes3 ? "YES" : "NO"}</h6>
        <h4>{count3}</h4>
        <button
          onClick={() => setCount3(count3 + 3)}
          className="btn btn-warning"
        >
          Add 3
        </button>
      </div>
    </div>
  );
};

UseMemoHook.propTypes = {};

export default UseMemoHook;
