function words (state = [], action) {
  switch (action.type) {
    case "RECEIVED_WORDS":
    return action.words
    case "RECEIVED_SINGLE_List":
    return action.wordlist
    default:
    return state
  }
}

export default words