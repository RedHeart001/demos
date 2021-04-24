/*
 * @Author: LiAo
 * @Date: 2020-08-13 00:16:23
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-13 15:21:54
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./component/Counter";
import counter from "./reducer";

let store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onAdd={() => store.dispatch({ type: "ADD" })}
      onReduce={() => store.dispatch({ type: "REDUCE" })}
    />,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
