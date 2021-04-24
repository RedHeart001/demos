/*
 * @Author: LiAo
 * @Date: 2020-08-14 15:18:11
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 17:21:55
 * @Description: file content
 */
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input = null;
  return (
    <div>
      <input
        type="input"
        ref={(node) => {
          console.log(node);
          input = node;
        }}
        onChange={(e) => {
          input.value = e.target.value;
        }}
      />
      <button
        onClick={() => {
          if (!input.value) return;
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        addTodo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
