/*
 * @Author: LiAo
 * @Date: 2020-08-13 14:54:07
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-13 15:28:03
 * @Description: file content
 */
export default (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "REDUCE":
      return (state -= 1);
    default:
      return state;
  }
};
