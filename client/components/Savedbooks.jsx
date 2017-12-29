import React from 'react'

import { Link } from 'react-router-dom'

const SavedBooks = (props) => {
  const book= props.book
  
  return (
    <div className='book-titles'>
      <span>{book.title}</span>{' '}by{' '}
      <span id='author'>{book.author}</span>{' '}
      <span id='country'>{book.country}</span>
      <Link to='/'><span id='checkout-vocab'>See Vocabulary</span></Link>
    </div>
  )
}

export default SavedBooks