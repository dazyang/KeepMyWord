// import bookData from '../../_DATA/books'

// const initialState = bookData.books
// const initialState = []

const books = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
    return action.books
    default:
    return state
  }
}

export default books
