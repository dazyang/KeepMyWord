import request from 'superagent'

<<<<<<< HEAD
// export const RECEIVED_BOOKS = 'RECEIVED_BOOKS'

=======
>>>>>>> 143e826388bd950501b67d2b15df3addb30896cc
export const receiveBooks = (books) => {
  return {
    type: "RECEIVED_BOOKS",
    books
  }
}

<<<<<<< HEAD
export const addBook = () => {
  return {
    type: "ADD_BOOK",
  }
}

export const receiveNewBook = (newBook) => {
  return {
    type: "RECEIVED_NEW_BOOK",
=======
export const addBook = (newBook) => {
  return {
    type: "ADD_BOOK",
>>>>>>> 143e826388bd950501b67d2b15df3addb30896cc
    newBook
  }
}

export function getBooks () {
  return (dispatch) => {
    request
<<<<<<< HEAD
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
    .send(newBook)
    // console.log(newBook)
      .end((err, res) => {
        if (err) {
          console.log(err.mesage)
          return
        }
        dispatch(receiveNewBook(res.body))
=======
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
>>>>>>> 143e826388bd950501b67d2b15df3addb30896cc
      })
  }
}