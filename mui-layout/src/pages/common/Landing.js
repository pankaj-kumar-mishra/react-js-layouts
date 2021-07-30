import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import { toggleSidebar } from "../redux/actions/app_A";

const Landing = () => {
  const history = useHistory();

  const { is_sidebar_open } = useSelector(
    (state) => ({
      is_sidebar_open: state.app.is_sidebar_open,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(is_sidebar_open);
    // dispatch(toggleSidebar());
  }, []);

  return (
    <div>
      <div className="bg-success vh-100">
        <h1 className="text-center">Landing</h1>
      </div>
    </div>
  );
};

export default Landing;
