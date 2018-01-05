function books (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case "ADD_BOOK":
    return [...newState, action.newBook]
    case "RECEIVED_BOOKS":
      return action.books
    default:
     return state
  }
}

export default books
