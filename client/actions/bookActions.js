import request from 'superagent'

// export const RECEIVED_BOOKS = 'RECEIVED_BOOKS'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVED_BOOKS",
    books
  }
}

export const saveBookToDb = (newBook) => {
  return {
    type: "RECEIVE_NEW_BOOK",
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

export function addBooks (newBook) {
  return (dispatch) => {
    request
    .post('/booklists', {newBook})
    .then(res => {
      dispatch(saveBookToDb(res.body))
    })
  }
}