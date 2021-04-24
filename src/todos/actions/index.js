/*
 * @Author: LiAo
 * @Date: 2020-08-14 14:07:43
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 15:56:50
 * @Description: file content
 */
let todoId = 0;
export const addTodo = (text) => {
  return {
    id: ++todoId,
    text,
    type: "ADD_TODO",
  };
};

export const toggleTodo = (id) => {
  return {
    id,
    type: "TOGGLE_TODO",
  };
};
