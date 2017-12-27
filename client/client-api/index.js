import request from 'superagent'

export function getDefinition(word, callback) {
  request
    .get(`https://wordsapiv1.p.mashape.com/words/${word}`)
    .set('X-Mashape-Key', 'oNFhkeZQj2mshEl2NvNeBfE56oAvp1NQkyIjsneBibckkViKNe')
    .set('Accept', 'application/json')
    .end((err, res) => {
      // console.log(res)
      if (err) { console.log(err + 'error') }
      else { callback(JSON.parse(res.text)) }
    })
}

// export function saveBook(book) {
//   return request.post('api/v1/booklist')
//   .send(book)
// }



