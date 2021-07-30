// import * as types from "../types";

// const initState = {
//   is_sidebar_open: false,
// };

// const state_R = (state = initState, action) => {
//   switch (action.type) {
//     case types.TOGGLE_SIDEBAR:
//       return {
//         ...state,
//         is_sidebar_open: action.payload ? false : !state.is_sidebar_open,
//       };

//     default:
//       return state;
//   }
// };

// export default state_R;

import { createReducer } from "@reduxjs/toolkit";
import * as types from "../types";

const initialState = {
  app_name: "Material UI",
  is_sidebar_open: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(types.APP_NAME, (state, action) => {
    state.app_name = action.payload;
  });
  builder.addCase(types.TOGGLE_SIDEBAR, (state, action) => {
    state.is_sidebar_open = action.payload;
  });
});

export default reducer;
