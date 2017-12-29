import React from 'react'

const SavedBooks = (props) => {
  const book= props.book
  
  return (
    <div className='container'>
      <p className='name'>{book.title}</p>
      <p className='description'>{book.author}</p>
      <p>
        <span className='country'>{book.country}</span>
      </p>
    </div>
  )
}

export default SavedBooks