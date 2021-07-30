import { useLayoutEffect, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UseLayoutEffectHook = (props) => {
  const [text, setText] = useState(
    ">>>>>>>>>>>>>><<<<<<<<<<&&&&&&&&&&&&&&&&&&&(((((((_+_++++++)))))))))))"
  );

  // NOTE useLayoutEffect fired/invoked before DOM changes are painted on the screen
  // useEffect fired/invoked after DOM changes are painted
  useEffect(() => {
    console.log(">>>>>>userEffect>>>>>>>Called");
    // setText("Pankaj updated on useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log(">>>>>>userLayoutEffect>>>>>>>Called");
    setText("Pankaj updated on useLayoutEffect");
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

UseLayoutEffectHook.propTypes = {};

export default UseLayoutEffectHook;
