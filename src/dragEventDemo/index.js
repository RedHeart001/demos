/*
 * @Author: LiAo
 * @Date: 2020-08-12 00:03:48
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-12 23:24:19
 * @Description: file content
 */

function dbounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

let dragger1 = document.getElementsByClassName("draggable")[0];
// let dragger2 = document.getElementsByClassName("draggable")[1];
let demo = dbounce(() => {
  console.log("draging!");
}, 1000);
function DragDrop(ev) {
  let dragging = null,
    drager = new EventTarget(),
    diffX = 0,
    diffY = 0;
  function handleEvent(event) {
    //获取事件和目标
    let target = event.target;
    //确定事件类型
    switch (event.type) {
      case "mousedown":
        if (target.className.indexOf("draggable") > -1) {
          dragging = target;
          diffX = event.clientX - target.offsetLeft;
          diffY = event.clientY - target.offsetTop;
          console.log("drag start!");
        }
        break;
      case "mousemove":
        if (dragging !== null) {
          //指定位置
          dragging.style.left = event.clientX - diffX + "px";
          dragging.style.top = event.clientY - diffY + "px";
          demo();
        }
        break;
      case "mouseup":
        console.log("drag end!");
        dragging = null;
        break;
      default:
        break;
    }
  }

  drager.enable = function () {
    ev.addEventListener("mousedown", handleEvent);
    ev.addEventListener("mousemove", handleEvent);
    ev.addEventListener("mouseup", handleEvent);
  };

  drager.disable = function () {
    ev.removeEventListener("mousedown", handleEvent);
    ev.removeEventListener("mousemove", handleEvent);
    ev.removeEventListener("mouseup", handleEvent);
  };

  return drager;
}

let drager1 = DragDrop(dragger1);
drager1.enable();
