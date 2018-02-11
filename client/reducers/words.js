function words (state = [], action) {
  switch (action.type) {
    case "RECEIVED_WORDS":
    return action.words
    case "RECEIVED_WORD_LIST":
    return action.wordlist
    default:
    return state
  }
}

export default words