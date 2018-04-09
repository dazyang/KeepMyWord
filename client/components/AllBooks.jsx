import React from 'react'

import { Link } from 'react-router-dom'

const AllBooks = (props) => {
  const book= props.book
  
  return (
    <div className='book-titles'>
      {book.book_title}/
      <p id='author'>{book.author}</p>
      <p id='country'>{book.country}</p>
      <div id='checkout-vocab'>
        <Link to={`/books/${props.book.id}/vocabs`}>See Vocabulary</Link>
      </div>  
    </div>
  )
}

export default AllBooks