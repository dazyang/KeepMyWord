import React from 'react'

import { Link } from 'react-router-dom'

const SavedWords = (props) => {
  const word = props.words
  return (
    <div className='book-titles'>
      {word.word}
    </div>
  )
}

export default SavedWords