// Reducer

import { ADD_BOOK } from '../actions/addBooks'

function addBook(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return action.addBooks
    default:
      return state
  }
}

export default addBook