import request from 'superagent'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVE_BOOKS",
    books
  }
}

export function getBooks () {
  return (dispatch) => {
    request
      .get(`/api/books`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveBooks(res.body))
      })
  }
}