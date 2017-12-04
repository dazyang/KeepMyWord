import React from 'react'
import {Link} from 'react-router-dom'

// Instead of this being a seperate page, when people clicked on 'Add new book', I want the form to appear on the same page where the buttons were (so buttons fades out, form fades in). The form should have two inputs "Book title" and "Authour", and a submit button. Once submitted, the book will be added into "My book list" and appear highlighted. User can click on the newly added book to go to create wordlist for that book.

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
