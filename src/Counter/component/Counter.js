/*
 * @Author: LiAo
 * @Date: 2020-08-13 14:54:26
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-13 17:39:13
 * @Description: file content
 */
import React from "react";
class Counter extends React.Component {
  render() {
    const { value, onAdd, onReduce } = this.props;
    console.log(value);
    return (
      <div>
        <p>value : {value}</p>
        <button onClick={onAdd}>add num</button>
        <button onClick={onReduce}>reduce num</button>
      </div>
    );
  }
}
export default Counter;
