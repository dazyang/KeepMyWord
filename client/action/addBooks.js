// Action
// import request from 'superagent'

// export const ADD_BOOK = 'ADD_BOOK'
// export const RECEIVE_NEW_BOOK = 'RECEIVE_NEW_BOOK'

// export const addBook = () => {
//   return {
//     type: 'ADD_BOOK'
//   }
// }

// export const receiveNewBook = (bookTitle) => {
//   return {
//     type: 'RECEIVE_NEW_BOOK',
//     bookTitle
//   }
// }

// export function addNewBook(title, author) {
//   return (dispatch) => {
//     console.log({ title })
//     request('post', 'bookTitle' + 'author', { title, author })
//       .then(res => {
//         dispatch(receiveNewBook(res.body))
//       })
//   }
// }



//REFs

// export function addNewRecipe(recipe) {
//   return (dispatch) => {
//     console.log({ recipe })
//     request('post', 'recipes', { recipe })
//       .then(res => {
//         dispatch(receiveNewRecipe(res.body))
//       })
//   }
// }