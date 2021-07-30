import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UseEffectHook = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [message, setMessage] = useState("Loading...");
  const [second, setSecond] = useState(0);

  // MSG FIRED ON EACH STATE CHANGE
  useEffect(() => {
    console.log("Fired on 😫any state change.");
  });
  // MSG FIRED ON SPECIFIC STATE CHANGE
  //   useEffect(() => {
  //     console.log("Fired on 👉specific state change.");
  //   }, [message]);
  //   useEffect(() => {
  //     if (count2 === 6) {
  //       console.log("Fired on 👉specific state change.", "Here is count2 6");
  //     }
  //   }, [count2 === 6]);
  // MSG REMOVE LISTENER
  // useEffect(() => {
  //   let unsubscribe = setInterval(() => {
  //     console.log("Logging on every interval");
  //     //   setSecond(second + 5);
  //     setSecond((prev) => prev + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(unsubscribe);
  //   };
  // }, []);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="text-center">
        <h4>{count1}</h4>
        <button
          onClick={() => setCount1(count1 + 1)}
          className="btn btn-warning"
        >
          Increase 1
        </button>
      </div>
      <div className="text-center">
        <h4>{count2}</h4>
        <button
          onClick={() => setCount2(count2 + 2)}
          className="btn btn-warning"
        >
          Increase 2
        </button>
      </div>
      <div className="text-center">
        <h4>{second}</h4>
        <p>{message}</p>
        <button
          onClick={() => setMessage("Welcome Pankaj")}
          className="btn btn-warning"
        >
          Welcome
        </button>
      </div>
    </div>
  );
};

UseEffectHook.propTypes = {};

export default UseEffectHook;
