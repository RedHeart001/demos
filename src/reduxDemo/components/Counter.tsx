import React from "react"
export const Counter = (props: any) => {
  const { value, onIncrement, onDecrement } = props
  console.log(props)
  return (
    <div>
      <p>{value.count}</p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  )
}
