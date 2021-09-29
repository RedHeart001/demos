import React from "react"
import ReactDOM from "react-dom"
import { SwordContainer } from "./swords"
import { Revolution } from "./revolution"
import {
  Width1Container,
  Width2Container,
  Width3Container,
  Width4Container,
} from "./width"

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* <SwordContainer /> */}
      {/* <Revolution /> */}
      <Width1Container />
      <Width2Container />
      <Width3Container />
      <Width4Container />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
