import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import SwitchRoutes from "./routes/SwitchRoutes";
import "./styles/custom.css";
import ScrollToTop from "./components/layouts/ScrollToTop";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <ScrollToTop>
            <CssBaseline />
            <SwitchRoutes />
          </ScrollToTop>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
