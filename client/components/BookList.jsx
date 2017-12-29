import React from 'react'
import { connect } from 'react-redux'

// import addToList from '../action/addToList'
import SavedBooks from './Savedbooks'

const BookList = (props) => {
    return (
      <div className='container'>
        <form>
          <label>I am currently reading 
          <input name="bookTitle" className="insert-title" type='text' placeholder='Book title' />
          by
          <input name="author" className="insert-name" type='text' placeholder='Author'  />
          </label>
          <input type="submit" value="Add to my booklist" />
        </form>

      {props.books.map(book => {
        return (
          <SavedBooks key={book.id} book={book}/>
        )
      })}

      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
// export default connenct()(BookList)