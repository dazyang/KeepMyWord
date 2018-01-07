import React from 'react'

import { Link } from 'react-router-dom'

const SavedWords = (props) => {
  const word = props.words
  return (
    <div className='book-titles'>
      <span>{word.word}</span>{' '}
      <span id='country'>{word.book_id}</span>
      
    </div>
  )
}

export default SavedWords