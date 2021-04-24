/*
 * @Author: LiAo
 * @Date: 2020-08-10 10:43:06
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-11 00:36:25
 * @Description: file content
 */
function Foo(side) {
  if (this instanceof Foo) {
    this.side = side;
    this.getArea = function () {
      return 0;
    };
  } else {
    return new Foo(side);
  }
}

function Bar(width, height) {
  Foo.call(this, 2);
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return width * height;
  };
}

Bar.prototype = new Foo();

// let bar = new Bar(5, 10);
// let i = 0;

// setTimeout(function () {
//   if (i < 5) {
//     console.log(i);
//     i++;
//     setTimeout(arguments.callee, 1000);
//   }
// }, 1000);

function debounce(fn, delay) {
  var timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

function throttle(fn, delay) {
  let isWorking = true;
  return function () {
    if (!isWorking) return;
    isWorking = false;
    const ctx = this;
    let args = arguments;
    setTimeout(() => {
      fn.apply(ctx, args);
      isWorking = true;
    }, delay);
  };
}

function demo() {
  console.log(1);
}

window.addEventListener("mousemove", throttle(demo, 1000));
