/*
 * @Author: LiAo
 * @Date: 2020-08-14 13:51:29
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-14 16:43:05
 * @Description: file content
 */
// import { combineReducers } from "redux";
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          isVisible: true,
          text: action.text,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((item) => {
        return item.id === action.id
          ? { isVisible: !item.isVisible, id: item.id, text: item.text }
          : item;
      });
    default:
      return state;
  }
};

export default todos;
