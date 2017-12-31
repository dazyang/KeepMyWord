import request from 'superagent'

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVE_BOOKS",
    books
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