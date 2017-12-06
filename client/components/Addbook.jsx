import React from 'react'
import {Link} from 'react-router-dom'

const Addbook = (props) => {
  return (
    <div className="holder">
      {props.books.map((book, author, i) =>
        <Link to='/wordlist' key={i}>
          <div className="words">{book} by {author}</div>
        </Link>
      )}
    </div>
  )
}

export default Addbook
