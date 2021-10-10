import React from "react"
import "./style/index.css"

export const Container = () => {
  return (
    <div className="container">
      <div className="sun"></div>
      <div className="bk"></div>
    </div>
  )
}

export const ImgContainer = () => {
  return (
    // 毛玻璃效果backdrop-filter就是一层背景模糊的遮罩层
    // 和filter模糊元素本身不一样，这个属性模糊的是元素的背景，但是对元素内容本身并没有什么影响
    <div className="imgbox">
      <img src="/image/1.jpg" alt="" />
      <p>dsad;kas;kd;kas;dk;askd</p>
    </div>
  )
}
