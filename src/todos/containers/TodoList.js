/*
 * @Author: LiAo
 * @Date: 2020-08-14 15:21:31
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 16:42:22
 * @Description: file content
 */
import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
const visibleStyle = {};
const unVisibleStyle = {
  color: "red",
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const TodoList = ({ todos, toggleTodo }) => {
  console.log(todos);
  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li
                style={todo.isVisible ? visibleStyle : unVisibleStyle}
                key={todo.id}
                onClick={() => {
                  toggleTodo(todo.id);
                }}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>there is no todo!add please!</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
