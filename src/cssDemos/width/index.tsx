import React from "react"
import "./style/index.css"

export const Width1Container = () => {
  return (
    <div className="width1">
      <a className="nav-a">nav-1</a>
      <a className="nav-a">nav-2</a>
      <a className="nav-a">nav-3</a>
    </div>
  )
}

export const Width2Container = () => {
  return (
    <div className="width2">
      <div></div>
    </div>
  )
}

export const Width3Container = () => {
  return (
    <div className="width3 father">
      <div className="son">dasdsadasda</div>
    </div>
  )
}

export const Width4Container = () => {
  return (
    // 最终子级的实际尺寸是根据父级的四个盒子（content，padding，border，margin）尺寸计算的
    // 如果说父级完全不指定尺寸，默认width:auto，则在子级渲染的时候，width:auto根本没有大小
    <div className="width4 box1">
      <div className="box two"></div>
      <div className="box three"></div>
      <div className="box four"></div>
      <div className="box five"></div>
    </div>
  )
}

export const Width5Container = () => {
  return (
    <div className="img">
      <a href="javascript(0)" className="prev">
        prev
      </a>
      <a href="javascript(0)" className="next">
        next
      </a>
    </div>
  )
}
