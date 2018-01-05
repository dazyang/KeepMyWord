function books (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case "ADD_BOOK":
    return [...newState, action.newBook]
    case "RECEIVED_BOOKS":
      return action.books
    case "ADD_BOOK":
      return [...action.books]
      case "RECEIVED_NEW_BOOK":
      return [...state, action.newBook]
    default:
     return state
  }
}

export default books
