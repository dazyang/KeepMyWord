import React from 'react'
import { connect } from 'react-redux'

import { getBooks } from '../actions/getBooks.js'
//problem was forgot to destructuring getBooks, that's why it didn't recognize the function
import SavedBooks from './SavedBooks.jsx'

class BookList extends React.Component {
    componentDidMount() {
      this.props.dispatch(getBooks())
    }
  
  render() {
    return (
        <div className='container'>
          <form>
            <label>Add a book: 
            <input name="bookTitle" className="insert-title" type='text' placeholder='I am currently reading...' />
            by
            <input name="author" className="insert-name" type='text' placeholder='Author'  />
            </label>
            <input type="submit" value="Add" />
          </form>

        {this.props.books.map((book) => {
          return (
            <SavedBooks key={book.id} book={book}/>
          )
        })}

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }  
}

export default connect(mapStateToProps)(BookList)