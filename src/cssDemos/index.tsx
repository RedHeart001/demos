import React from "react"
import ReactDOM from "react-dom"
import { SwordContainer } from "./swords"
import { Revolution } from "./revolution"

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* <SwordContainer /> */}
      <Revolution />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
