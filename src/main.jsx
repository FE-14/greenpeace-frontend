import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./app/store";
import { AuthProvider } from "./context/AuthProvider";
import router from "./router";

import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
