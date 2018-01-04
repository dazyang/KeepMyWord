export const ADD_BOOK = 'ADD_BOOK'

export const addBook = (bookTitle, author) => {
  return {
    type: 'ADD_BOOK',
    bookTitle,
    author
  }
}