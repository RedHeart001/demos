import React from "react"
import ReactDOM from "react-dom"
import { Count } from "./reducers/count"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Counter } from "./components/Counter"

const store = createStore(Count, applyMiddleware(thunk))
const rootEl = document.getElementById("root")
console.log(store)

const App = () => {
  return (
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() => {
          setTimeout(() => {
            store.dispatch({ type: "ADD_COUNT" })
          }, 2000)
        }}
        onDecrement={() => store.dispatch({ type: "REDUCE_COUNT" })}
      />
    </div>
  )
}

const render = () => ReactDOM.render(<App />, rootEl)
store.subscribe(() => {
  console.log(111)
})

render()
store.subscribe(render)
