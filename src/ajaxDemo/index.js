/*
 * @Author: LiAo
 * @Date: 2020-07-21 23:58:57
 * @LastEditors: 李敖
 * @LastEditTime: 2020-07-31 00:27:48
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom";

class Ajax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "first msg",
    };
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();

    // 监听xhr对象的readyState属性，当该属性发生改变时会调用回调函数。readyState通常具有以下状态：
    // 0：未初始化，尚未调用 open()方法；
    // 1：启动，已经调用 open()方法，但尚未调用 send()方法；
    // 2：发送，已经调用 send()方法，但尚未接收到响应；
    // 3：接收，已经接收到部分响应数据；
    // 4：完成，已经接收到全部响应数据，而且已经可以在客户端使用了。
    xhr.onreadystatechange = () => {
      try {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr);
          } else {
            alert("Request was unsuccessful: " + xhr.status);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    // 请求进度事件

    // xhr.open("get", "http://39.100.26.51/a/liao?name=hh&age=23", true); //参数依次代表请求的方式（get、post），请求的目标地址，请求是否为异步
    // xhr.send(null); //向目标地址发送信息的主体，当无需发送信息时，可以传入一个null
    // xhr.open("post", "http://39.100.26.51/a/liao?query1=query1&query2=query2");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // 设置头部，表单发送，这一步必须确保请求是启动的
    // xhr.send("username=liao&age=23");

    xhr.open("GET", "http://39.100.26.51/image/preview.jpg", true);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
  }

  render() {
    let msg = this.state.msg;
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  }
}

ReactDOM.render(<Ajax />, document.getElementById("root"));
