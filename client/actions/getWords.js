import request from 'superagent'

export const receiveWords = (words) => {
  return {
    type: "RECEIVED_WORDS",
    words
  }
}

export function getWords () {
  return (dispatch) => {
    request
      .get('api/v1/wordlists')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveWords(res.body))
      })
  }
}