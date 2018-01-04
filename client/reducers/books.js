function books (state = [], action) {
  switch (action.type) {
    case "RECEIVED_BOOKS":
      return action.books
    case "RECEIVE_NEW_BOOK":
      return [...state, action.newBook]
    default:
     return state
  }
}

export default books
