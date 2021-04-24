/*
 * @Author: LiAo
 * @Date: 2020-08-14 09:28:27
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 16:10:03
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
