function books (state = [], action) {
  switch (action.type) {
    case "RECEIVED_BOOKS":
    return action.books
    default:
    return state
  }
}

export default books
