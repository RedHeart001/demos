/*
 * @Author: LiAo
 * @Date: 2020-08-13 17:57:11
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 17:31:01
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import reducers from "./reducers";

const store = createStore(reducers);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
