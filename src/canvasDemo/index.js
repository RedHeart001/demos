/*
 * @Author: LiAo
 * @Date: 2020-07-12 14:32:38
 * @LastEditors: 李敖
 * @LastEditTime: 2020-07-18 12:54:32
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom";

class Canvas extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let od = document.getElementById("drawing");
    let ctx = od.getContext("2d"); // 获取canvas上下文

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);

    ctx.globalCompositeOperation = "source-atop";
    // ctx.globalCompositeOperation = "destination-atop";

    ctx.fillStyle = "blue";
    ctx.fillRect(30, 30, 100, 100);
  }

  render() {
    return (
      <div>
        <canvas id="drawing" width="800" height="400"></canvas>
      </div>
    );
  }
}

ReactDOM.render(<Canvas />, document.getElementById("root"));
