import request from 'superagent'

export const receiveBooks = (books) => {
  return {
    type: "RECEIVED_BOOKS",
    books
  }
}

export const addBook = (newBook) => {
  return {
    type: "ADD_BOOK",
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


export function postBookRequest (userAdd) {
  const newBook = {
    book_title: userAdd.book_title,
    author: userAdd.author,
    country: userAdd.country
  }
  return (dispatch) => {
    request
      .post('api/v1/booklist')
      .send(newBook)
      .end((err,res)=> {
        if (err) {
          console.log(err.message)
          return
        }
        dispatch(addBook(res.body))
      })
  }
}