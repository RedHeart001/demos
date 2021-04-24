/*
 * @Author: LiAo
 * @Date: 2020-08-14 09:41:25
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 15:21:51
 * @Description: file content
 */
import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
