function words (state = [], action) {
  switch (action.type) {
    case "RECEIVED_WORDS":
    return action.words
    default:
    return state
  }
}

export default words