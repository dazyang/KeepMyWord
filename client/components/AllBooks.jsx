import React from 'react'

import { Link } from 'react-router-dom'

const AllBooks = (props) => {
  const book= props.book
  
  return (
    <div className='book-titles'>
      <span>{book.book_title}</span>{' '}/{' '}
      <span id='author'>{book.author}</span>{' '}
      <span id='country'>{book.country}</span>
      <Link to={`/books/${props.book.id}/vocabs`}><span id='checkout-vocab'>See Vocabulary</span></Link>
    </div>
  )
}

export default AllBooks