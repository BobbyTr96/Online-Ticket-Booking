import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// react-redux
import { Provider } from "react-redux";
import store from "./store";



import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
