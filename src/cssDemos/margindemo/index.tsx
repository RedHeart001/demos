import React from "react"
import "./style/index.css"

export const MarginContainer = () => {
  return (
    // <div
    //   style={{
    //     width: "30em",
    //     height: "10em",
    //   }}
    // >
    //   <div
    //     className="son"
    //     style={{
    //       margin: "0 -2em",
    //     }}
    //   ></div>
    // </div>

    // <div
    //   style={{
    //     overflow: "hidden",
    //   }}
    // >
    //   <img src="/image/1.jpg" alt="" style={{ float: "left" }} />
    //   <p style={{ marginLeft: "140px" }}>dsadasda</p>
    // </div>

    // <div className="wrapper">
    //   <div className="test-margin">
    //     <div>111</div>
    //     <div>222</div>
    //     <div>333</div>
    //     <div>444</div>
    //     <div>555</div>
    //     <div>666</div>
    //     <div>777</div>
    //   </div>
    //   </div>

    <div style={{ width: "34em", overflow: "hidden" }}>
      <ul style={{ marginRight: "-2em" }}>
        {[...new Array(10).fill("str")].map((item: any, index: number) => {
          return (
            <li
              key={`${item}-${index}`}
              style={{
                listStyle: "none",
                width: "10em",
                height: "5em",
                float: "left",
                background: "red",
                marginRight: "2em",
              }}
            >
              {`${item}-${index}`}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
