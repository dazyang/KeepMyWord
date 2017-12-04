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



//==== Annah's example ===//

// export function getRobot(text, cb) {
//   request
//     .get(`https://robohash.p.mashape.com/index.php?text=${text}`)
//     .set('X-Mashape-Key', 'SdsP8G2JX5mshrEyF4C2mXpN2vrep1g0HxqjsnsmWUtTTWOd5m')
//     .set('Accept', 'application/json')
//     .end((err, res) => {
//       console.log(res)
//       if (err) { console.log(err + 'error') }
//       else { cb(JSON.parse(res.text)) }
//     })
// }