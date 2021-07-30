import { useRef } from "react";
import PropTypes from "prop-types";

const UseRefHook = (props) => {
  const nameRef = useRef();

  const handleSubmit = () => {
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);
    nameRef.current.focus();
    nameRef.current.value = "Pankaj Mishra";
  };

  return (
    <div>
      <form action="#">
        <input id="name" type="text" autoComplete="off" ref={nameRef} />
      </form>
      <button
        onClick={handleSubmit}
        className="btn btn-outline-primary btn-sm mt-3"
      >
        Submit
      </button>
    </div>
  );
};

UseRefHook.propTypes = {};

export default UseRefHook;
