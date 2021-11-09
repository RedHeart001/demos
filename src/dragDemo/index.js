/*
 * @Author: LiAo
 * @Date: 2020-07-18 16:27:37
 * @LastEditors: 李敖
 * @LastEditTime: 2020-07-20 23:14:02
 * @Description: file content
 */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const DragBox = () => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    let dragBoxs = document.getElementsByClassName("dragBox"),
      dragTarget = document.getElementsByClassName("dragTarget")[0],
      moveBox = null;

    for (let box of dragBoxs) {
      box.addEventListener("dragstart", (e) => {
        moveBox = e.target;
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData("operator", moveBox.innerText);
      });
    }

    dragTarget.addEventListener("dragenter", (e) => {
      e.preventDefault();
    });
    dragTarget.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    dragTarget.addEventListener("drop", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
      let copyNode = moveBox.cloneNode(true);
      if (dragTarget.childNodes.length === 0) {
        dragTarget.appendChild(copyNode);
      } else {
        dragTarget.innerHTML = "";
        dragTarget.appendChild(copyNode);
      }

      let operator = e.dataTransfer.getData("operator"),
        num1 = parseInt(document.getElementsByName("numOne")[0].value),
        num2 = parseInt(document.getElementsByName("numTwo")[0].value);
      switch (operator) {
        case "+":
          setResult({ result: num1 + num2 });
          break;
        case "-":
          setResult({ result: num1 - num2 });
          break;
        case "*":
          setResult({ result: num1 * num2 });
          break;
        case "/":
          setResult({ result: num1 / num2 });
          break;
      }
    });
  }, [])

  return (
    <div>
      <div className="dragBox" draggable="true">
        +
      </div>
      <div className="dragBox" draggable="true">
        -
      </div>
      <div className="dragBox" draggable="true">
        *
      </div>
      <div className="dragBox" draggable="true">
        /
      </div>
      <br />
      <input type="text" value="5" name="numOne" />
      <div className="dragTarget"></div>
      <input type="text" value="8" name="numTwo" />
      <div className="equal"> = </div>
      <span className="result">{result}</span>
    </div>
  );
}

ReactDOM.render(<DragBox />, document.getElementById("root"));
