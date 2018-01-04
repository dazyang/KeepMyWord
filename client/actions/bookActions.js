import request from 'superagent'

// export const RECEIVED_BOOKS = 'RECEIVED_BOOKS'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVED_BOOKS",
    books
  }
}

export const addBook = () => {
  return {
    type: "ADD_BOOK",
  }
}

export const receiveNewBook = (newBook) => {
  return {
    type: "RECEIVED_NEW_BOOK",
    newBook
  }
}

export function getBooks () {
  return (dispatch) => {
    request
    .get('/api/v1/booklists')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveBooks(res.body))
    })
  }
}

export function postBooks (newBook) {
  return (dispatch) => {
    request
    .post('api/v1/booklists')
    .then(res => {
    dispatch(receiveNewBook(res.body))
  })
}
}

// .send(newBook)
//   .end((err, res) => {
//     if (err) {
//       console.log(err.mesage)
//       return
//     }