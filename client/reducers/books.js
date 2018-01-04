function books (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case "RECEIVED_BOOKS":
      return action.books
    case "ADD_BOOK":
      return [...newState, action.newBook]
    default:
     return state
  }
}

export default books
