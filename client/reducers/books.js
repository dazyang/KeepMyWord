function books (state = [], action) {
  switch (action.type) {
    case "RECEIVED_BOOKS":
      return action.books
    // case "RECEIVED_SINGLE_BOOK":
    //   return action.singleBook
    case "ADD_BOOK":
    return [...action.books]
    case "RECEIVED_NEW_BOOK":
    return [...state, action.newBook]
    default:
     return state
  }
}

export default books
