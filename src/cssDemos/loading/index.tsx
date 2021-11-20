import React from "react"
import "./style/index.css"

export const LoadingContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      <div className="loading"></div>
    </div>
  )
}
