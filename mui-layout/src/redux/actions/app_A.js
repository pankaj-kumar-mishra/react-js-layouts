import * as types from "../types";

export const toggleSidebar = (status) => {
  return (dispatch) => {
    dispatch({ type: types.TOGGLE_SIDEBAR, payload: status });
  };
};
