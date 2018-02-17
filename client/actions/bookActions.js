import request from 'superagent'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVED_BOOKS",
    books
  }
}


export const addBook = () => {
  return {
    type: "ADD_BOOK"
  }
}

export const receiveNewBook = (newBook) => {
  return {
    type: "RECEIVED_NEW_BOOK",
    newBook
  }
}

export const receiveSingleBook = (singleBook) => {
  return {
    type: "RECEIVED_SINGLE_BOOK",
    singleBook
  }
}

export function getAllBooks () {
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

export function singleBookReq (bookId) {
  return (dispatch) => {
    request
      .get(`api/v1/booklists/${bookId}/vocabs`)
      .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveSingleBook(res.body))
    })
  }
}


export function postBookRequest (newBook) {
  return (dispatch) => {
    request
      .post('/api/v1/booklists')
      .send(newBook)
      .then(res => {
        dispatch(receiveNewBook(res.body))
      })
  }
}