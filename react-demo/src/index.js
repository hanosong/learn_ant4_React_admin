import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/css/index.less";
import { HashRouter } from "react-router-dom";
import LoadingView from "@/views/loading-view/index.jsx";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Suspense fallback={<LoadingView />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>
);
