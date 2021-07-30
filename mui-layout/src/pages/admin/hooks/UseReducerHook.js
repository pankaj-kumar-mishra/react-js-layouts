import { useReducer } from "react";
import PropTypes from "prop-types";

const initialCount = {
  count: 0,
  status: "START",
  mark: 100,
};
const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1, status: action.type };
    case "MINUS":
      return { ...state, count: state.count - 1, status: action.type };
    case "MULTIPLY":
      return {
        ...state,
        count: state.count * action.payload,
        status: action.type,
      };

    case "MARK_ADD":
      return { ...state, mark: state.mark + action.payload };
    case "MARK_MINUS":
      return { ...state, mark: state.mark - action.payload };

    case "START":
      return initialCount;

    default:
      return state;
  }
};

const UseReducerHook = (props) => {
  const [countData, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-center">
        <h4>{countData.count}</h4>
        <p>{countData.status}</p>
        <button
          onClick={() => dispatch({ type: "ADD" })}
          className="btn btn-warning"
        >
          Add
        </button>
      </div>
      <div className="text-center">
        <h4>{countData.count}</h4>
        <p>{countData.status}</p>
        <button
          onClick={() => dispatch({ type: "MINUS" })}
          className="btn btn-warning"
        >
          Minus
        </button>
      </div>
      <div className="text-center">
        <h4>{countData.count}</h4>
        <p>{countData.status}</p>
        <button
          onClick={() => dispatch({ type: "MULTIPLY", payload: 5 })}
          className="btn btn-warning"
        >
          Multiply
        </button>
      </div>
      <div className="text-center">
        <h4>{countData.count}</h4>
        <p>{countData.status}</p>
        <button
          onClick={() => dispatch({ type: "START" })}
          className="btn btn-warning"
        >
          Reset
        </button>
      </div>
      <div className="text-center">
        <h4>{countData.mark}</h4>
        <button
          onClick={() => dispatch({ type: "MARK_ADD", payload: 5 })}
          className="btn btn-warning"
        >
          Mark Add
        </button>
      </div>
      <div className="text-center">
        <h4>{countData.mark}</h4>
        <button
          onClick={() => dispatch({ type: "MARK_MINUS", payload: 3 })}
          className="btn btn-warning"
        >
          Mark Minus
        </button>
      </div>
    </div>
  );
};

UseReducerHook.propTypes = {};

export default UseReducerHook;
