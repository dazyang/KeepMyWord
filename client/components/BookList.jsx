import React from 'react'
import { connect } from 'react-redux'

import { getBooks } from '../actions/getBooks.js'
//problem was forgot to destructuring getBooks, that's why it didn't recognize the function
import SavedBooks from './Savedbooks.jsx'

class BookList extends React.Component {
    componentDidMount() {
      this.props.dispatch(getBooks())
    }
  
  render() {
    console.log(this.props.books)
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