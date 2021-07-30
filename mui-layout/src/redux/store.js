import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import app_R from "./reducers/app_R";
import auth_R from "./reducers/auth_R";

// NOTE For Redux Persist
const reducers = combineReducers({ app: app_R, auth: auth_R });

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth"],
  blacklist: ["app", "auth"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };

// NOTE This for without redux persist
// const store = configureStore({
//   reducer: { app: app_R, auth: auth_R },
// //   middleware: [thunk, logger etc...],
// });

// export default store;

// NOTE PREVIOUS TO REDUX TOOLKIT
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import reducers from "./reducers";

// const persistConfig = {
//   key: "root",
//   storage,
//   // whitelist: ["auth_R"],
//   blacklist: ["app_R", "auth_R"],
// };

// const persistedReducers = persistReducer(persistConfig, reducers);
// const reduxStore = createStore(persistedReducers, applyMiddleware(thunk));

// // NOTE PLAIN WITHOUT REDUX PERSIST
// // const reduxStore = createStore(reducers, applyMiddleware(thunk));

// export default reduxStore;
