import React from 'react'
import { connect } from 'react-redux'

import { getBooks, postBookRequest } from '../actions/bookActions.js'
//problem was forgot to destructuring getBooks, that's why it didn't recognize the function
import SavedBooks from './SavedBooks.jsx'

class BookList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newBook: {
        book_title: 'newbook',
        author: 'new author',
        country: 'new country'
      }
    }
    this.submitBook = this.submitBook.bind(this)
    this.updateBookInput = this.updateBookInput.bind(this)
  }
  
  componentDidMount() {
    this.props.dispatch(getBooks())
  }
  
  submitBook(e) {
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(postBookRequest(this.state.newBook))
  }

  updateBookInput(e) {
    let newBook = this.state.newBook
    newBook[e.target.name] = e.target.value
    this.setState({newBook})
  }


  render() {
    return (
        <div className='container'>
          <form onSubmit={this.sumbitBook}>
            <label>Add a book{' '} 
            <input name="bookTitle" className="insert-title" type='text' placeholder='I am currently reading...' onChange={this.updateBookInput}/>
            by
            <input name="author" className="insert-name" type='text' placeholder='Author' onChange={this.updateBookInput}/>
            <input name="country" className="insert-name" type='text' placeholder='Country' onChange={this.updateBookInput} />
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