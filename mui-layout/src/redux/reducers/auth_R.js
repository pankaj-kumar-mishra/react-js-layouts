import { createReducer } from "@reduxjs/toolkit";
import * as types from "../types";

const initialState = {
  // user_data: null,
  user_data: { name: "Pankaj Mishra", role: "admin" },
  // user_data: { name: "Pankaj Mishra", role: "user" },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(types.USER_DATA, (state, action) => {
    state.user_data = action.payload;
  });
});

export default reducer;
