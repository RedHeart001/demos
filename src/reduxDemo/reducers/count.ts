interface ActType {
  type: string
  payload?: number
}
export const Count = (state = { count: 0 }, action: ActType) => {
  switch (action.type) {
    case "ADD_COUNT":
      return {
        count: ++state.count,
      }
    case "REDUCE_COUNT":
      return {
        count: --state.count,
      }
    case "CLEAR_COUNT":
      return {
        count: 0,
      }
    default:
      return state
  }
}
